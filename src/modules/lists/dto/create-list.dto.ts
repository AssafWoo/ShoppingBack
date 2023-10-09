// create-list.dto.ts
export class CreateListDto {
    name: string;
    items?: CreateListItemDto[]; 
}

export class CreateListItemDto {
    productId: string;
    amountOfUnits: number;
    assignee?: string;
    readonly description?: string;

}
