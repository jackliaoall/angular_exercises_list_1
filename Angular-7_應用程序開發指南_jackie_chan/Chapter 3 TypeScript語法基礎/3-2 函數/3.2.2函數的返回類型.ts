//1. 3.2.1的函數add()可以被重構
function add_2(x: number, y: number): number {
    return x + y;
}

//2.
function concatenate(x: string, y: string): string {
    return x + y;
}

//3. 為什麼要手動指定呢? 便於閱讀
function getBiggerHeight_2(height: number, unit: string='px'): string | number {
    if(unit) {
        return height * 2 + unit;
    }
    return height * 2;
}