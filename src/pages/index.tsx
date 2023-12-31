import React from "react";
import "./index.less";
import { sum } from "../utils/sum";

const IndexPage: React.FC = () => {
    console.log(sum(1,2));
    console.log(sum("1","2"));
    type Status<sm> = "success" | "failed" | sm;
    type SureSatus = Status<"MN">;
    const d: SureSatus = "MN";
    console.log(d);
    type TestType = Record<string,string>;
    type UserType = Partial<TestType>;
    const user: UserType = {
        name: "xxxx",
        age: "18 years old"
    }
    interface People {
        name: string,
        age: number,
        father: string,
        mother: string
    }
    type TempPeople = Pick<People,"name" | "age">;
    type NewPeople = Omit<TempPeople,"age">;
    const newPeople: NewPeople = {
        name: "xxx"
    }
    console.log(newPeople.name);
    return (
        <>
            This is index page.
            <div className="test-less">
                if color is red,the config of less is successful.
            </div>
        </>
    )
}
export default IndexPage;