class HashTable {
    public table: any[];
    // public table: (number | string | null)[]
    constructor (size: number) {
        this.table = new Array(size)
        console.log(this.table);
        
    }
}

const table = new HashTable(10)