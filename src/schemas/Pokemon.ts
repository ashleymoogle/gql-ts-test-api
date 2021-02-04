import { Field, Int, ObjectType } from "type-graphql";
import Type from "./Type";

@ObjectType()
export default class Pokemon {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    url: string;

    @Field(type => [Type], { nullable: true })
    types?: Type[];
}
