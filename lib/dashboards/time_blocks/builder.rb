module Dashboards
  module TimeBlocks
    class Builder
      attr_reader :user
      TOTAL_TIME_BLOCK_POINTS = 25
      TOTAL_TIME_UNIT = 5
      TIME_UNIT_POINTS = 1

      def initialize(user:, started_at: nil)
        @user = user
        @beginning_of_week = started_at
      end

      def call
        TimeBlock.transaction do
          time_block = build_time_block

          days.each do |day|
            time_unit = time_block.time_units.build(name: day,
                                                    grade_total: TOTAL_TIME_UNIT)
            categories.each do |category|
              time_unit.build_grade(category: category,
                                    value: TIME_UNIT_POINTS,
                                    passed: true)
            end
          end
          time_block.save
        end
      end

      private

      def given_time_block_exists?
        user.time_blocks.for_started_at(beginning_of_week).any?
      end

      def build_time_block
        if given_time_block_exists?
          beginning_of_next_week = beginning_of_week + 1.week
          end_of_next_week = beginning_of_next_week + days_left_for_week
          date_range = build_date_range(beginning_of_week: beginning_of_next_week,
                                        end_of_week: end_of_next_week)
          time_block = user.time_blocks.build(started_at: beginning_of_next_week,
                                              ended_at: end_of_next_week,
                                              total: TOTAL_TIME_BLOCK_POINTS,
                                              date_range: date_range)
        else
          end_of_week = beginning_of_week + days_left_for_week
          date_range = build_date_range(beginning_of_week: beginning_of_week,
                                        end_of_week: end_of_week)
          time_block = user.time_blocks.build(started_at: beginning_of_week,
                                              ended_at: end_of_week,
                                              total: TOTAL_TIME_BLOCK_POINTS,
                                              date_range: date_range)
        end

        time_block
      end

      def categories
        @categories ||= Category.all
      end

      def beginning_of_week
        @beginning_of_week ||= Date.today.beginning_of_week
      end

      def days
        @days ||= %w[L M M J V]
      end

      def days_left_for_week
        6.days
      end

      def build_date_range(beginning_of_week:, end_of_week:)
        "#{beginning_of_week.strftime('%b %d')} - #{end_of_week.strftime('%b %d %Y')}"
      end
    end
  end
end
