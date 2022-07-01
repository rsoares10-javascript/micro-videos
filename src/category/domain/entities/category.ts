export type CategoryProperties = {
    name: string;
    description?: string;
    isActive?: boolean;
    createdAt?: Date;
};

export class Category {
    constructor(readonly props: CategoryProperties) {}

    get name(): string {
        return this.props.name;
    }

    get description() {
        return this.props.description;
    }
    get isActive() {
        return this.props.isActive;
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
