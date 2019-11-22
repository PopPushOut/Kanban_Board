import CommentCounter from "../components/CommentCounter";
import React from "react";
import { shallow, mount } from "enzyme";

const comments = [
  {
    user: "Danny",
    text: "Dan. WE should have lunch."
  },
  {
    user: "Jock",
    text: "#adults"
  },
  {
    user: "Murray",
    text: "@jdaveknox yes!"
  },
  {
    user: "Bill",
    text: "😍 love Hamilton!"
  }
];
describe("<CommentCounter/>", () => {
  it("renders and displays properly", () => {
    const wrapper = shallow(<CommentCounter comments={comments} />);
    expect(wrapper.find(".comment-count").text()).toBe("4");
    wrapper.setProps({ comments: [] });
    expect(wrapper.find(".comment-count").text()).toBe("0");
  });
});
