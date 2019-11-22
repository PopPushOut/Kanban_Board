import Task from "../components/boardPage/Task";
import React from "react";
import { shallow } from "enzyme";

const task = {
  id: "4571e272-b4ea-4b3b-8cb0-2b715d172485",
  title: "Amazing title"
};
describe("<Task/>", () => {
  it("renders and displays properly", () => {
    const wrapper = shallow(<Task task={task} comments={{}} />);
    const taskTitle = wrapper.find("h4");

    expect(taskTitle.text()).toBe("Amazing title");
  });
  it("passes correct task id via props to CommentCounter component", () => {
    const wrapper = shallow(<Task task={task} comments={{}} />);
    expect(wrapper.find("CommentCounter").prop("taskId")).toEqual(task.id);
  });
});
