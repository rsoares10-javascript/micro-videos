import { Category } from "./category";

describe("Category unit test", (): void => {
    test("Test category constructor", (): void => {
        const props = {
            name: "category title",
            description: "some description",
            isActive: true,
            createdAt: new Date(),
        };
        const category = new Category(props);
        expect(category.props).toStrictEqual(props);
    });
});
