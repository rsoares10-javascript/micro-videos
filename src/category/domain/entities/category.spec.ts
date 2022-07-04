import { omit } from "lodash";
import { Category, CategoryProperties } from "./category";

describe("Category unit test", (): void => {
    test("Test category constructor", (): void => {
        let category = new Category({ name: "category title" });
        let props: Pick<
            CategoryProperties,
            "name" | "description" | "isActive"
        > = omit(category.props, "createdAt");
        expect(props).toStrictEqual({
            name: "category title",
            description: null,
            isActive: true,
        });
        expect(category.props.createdAt).toBeInstanceOf(Date);

        let createdAt = new Date();
        category = new Category({
            name: "category title",
            description: "some description",
            isActive: false,
            createdAt,
        });
        expect(category.props).toStrictEqual({
            name: "category title",
            description: "some description",
            isActive: false,
            createdAt,
        });

        category = new Category({
            name: "category title",
            description: "other description",
        });
        expect(category.props).toMatchObject({
            name: "category title",
            description: "other description",
        });

        category = new Category({
            name: "category title",
            isActive: true,
        });
        expect(category.props).toMatchObject({
            name: "category title",
            isActive: true,
        });

        createdAt = new Date();
        category = new Category({
            name: "category title",
            createdAt,
        });
        expect(category.props).toMatchObject({
            name: "category title",
            createdAt,
        });
    });

    test("Test category name getter", (): void => {
        const category = new Category({ name: "category name" });
        expect(category.name).toBe("category name");
    });

    test("Test category description getter", (): void => {
        const category = new Category({
            name: "category name",
            description: "category description",
        });
        expect(category.description).toBe("category description");
    });

    test("Test category isActive getter", (): void => {
        let category = new Category({ name: "category name" });
        expect(category.isActive).toBeTruthy();
        category = new Category({ name: "category name", isActive: false });
        expect(category.isActive).toBeFalsy();
    });

    test("Test category createdAt getter", (): void => {
        let category = new Category({ name: "category name" });
        expect(category.createdAt).toBeInstanceOf(Date);
        const createdAt = new Date();
        category = new Category({ name: "category name", createdAt });
        expect(category.createdAt).toBe(createdAt);
    });

    test("Test category description setter", (): void => {
        const category = new Category({ name: "category name" });
        category["description"] = "category description";
        expect(category.description).toBe("category description");
        category["description"] = undefined;
        expect(category.description).toBeNull();
        category["description"] = null;
        expect(category.description).toBeNull();
    });

    test("Test category isActive setter", (): void => {
        const category = new Category({ name: "category name" });
        expect(category.isActive).toBeTruthy();
        category["isActive"] = false;
        expect(category.isActive).toBeFalsy();
    });
});
