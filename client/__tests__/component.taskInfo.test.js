import TaskInfo from "../components/taskPage/TaskInfo";
import React from "react";
import { shallow } from "enzyme";
const dateFinderInWrapper = (wrapper, index) => {
  return wrapper
    .find(".task-info p")
    .at(index)
    .children()
    .at(1)
    .text();
};
const task = {
  id: "ef673bf1-682f-4bfa-b590-ccbe03f103f7",
  updatedOn: "2015-03-25T12:00:00Z",
  createdOn: "2015-03-25T12:00:00Z",
  title: "Turn around 5 times to feel better",
  description: "Spinned 15 times for greater effect, felt worse :puke"
};

describe("<TaskInfo/>", () => {
  it("renders and displays properly", () => {
    const createdDateIndex = 0;
    const updatedDateIndex = 1;

    const wrapper = shallow(<TaskInfo task={task} comments={{}} />);
    expect(wrapper.find(".task-info h2").text()).toBe(task.title);
    const createdDate = dateFinderInWrapper(wrapper, createdDateIndex);
    const updatedDate = dateFinderInWrapper(wrapper, updatedDateIndex);
    expect(createdDate).toBe("2015-03-25 14:00:00");
    expect(updatedDate).toBe("2015-03-25 14:00:00");
    expect(wrapper.find(".form textarea").props().value).toBe(task.description);
  });
});
