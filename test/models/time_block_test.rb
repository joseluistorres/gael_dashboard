require "test_helper"

describe TimeBlock do
  let(:time_block) { TimeBlock.new }

  it "must be valid" do
    value(time_block).must_be :valid?
  end
end
