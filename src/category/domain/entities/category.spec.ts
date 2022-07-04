import { omit } from "lodash"
import { Category, CategoryProperties } from "./category"

describe("Category unit test", (): void => {
    test("Test category constructor", (): void => {
        let category = new Category({ name: "category title" })
        let props: Pick<
            CategoryProperties,
            "name" | "description" | "isActive"
        > = omit(category.props, "createdAt")
        expect(props).toStrictEqual({
            name: "category title",
            description: null,
            isActive: true,
        })
        expect(category.props.createdAt).toBeInstanceOf(Date)

        let createdAt = new Date()
        category = new Category({
            name: "category title",
            description: "some description",
            isActive: false,
        })
        expect(category.props).toStrictEqual({
            name: "category title",
            description: "some description",
            isActive: false,
            createdAt,
        })

        category = new Category({
            name: "category title",
            description: "other description",
        })
        expect(category.props).toMatchObject({
            name: "category title",
            description: "other description",
        })

        category = new Category({
            name: "category title",
            isActive: true,
        })
        expect(category.props).toMatchObject({
            name: "category title",
            isActive: true,
        })

        createdAt = new Date()
        category = new Category({
            name: "category title",
            createdAt,
        })
        expect(category.props).toMatchObject({
            name: "category title",
            createdAt,
        })
    })
})
