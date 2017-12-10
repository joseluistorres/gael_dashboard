require "test_helper"

describe TimeUnit do
  let(:time_unit) { TimeUnit.new }

  it "must be valid" do
    value(time_unit).must_be :valid?
  end
end
