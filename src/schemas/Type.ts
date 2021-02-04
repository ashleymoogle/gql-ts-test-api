import { Field, Int, ObjectType } from "type-graphql";
import Pokemon from "./Pokemon";

@ObjectType()
export default class Type {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field(type => [Pokemon])
    pokemon: Pokemon[];
}
