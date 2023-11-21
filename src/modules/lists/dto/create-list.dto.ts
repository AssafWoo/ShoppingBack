// create-list.dto.ts
export class CreateListDto {
    name: string;
    items?: CreateListItemDto[]; 
    userId: string; 
    organizationId: string;  
}

export class CreateListItemDto {
    productId: string;
    amountOfUnits: number;
    assignee?: string;
    readonly description?: string;

}
