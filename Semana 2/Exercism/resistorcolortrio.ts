export function decodedResistorValue(col : string[]): string | undefined {
    let [col1,col2,col3]=col
    let num3 = COLORS.indexOf(col3);
    let num4 = Number(String(COLORS.indexOf(col1)) + String(COLORS.indexOf(col2)))*(10**num3)
    let num5=num4; let count = 0;
    String(num5).split("").map((num) => {
      if (num === "0") {count++;}
    });
    if(count<3){
      return `${num5} ohms`;
    }else if(count>=3&&count<6){
      return `${num5/1000} kiloohms`
    }else if(count>=6&&count<9){
      return `${num5 / 1000000} megaohms`;
    }else if(count==9){
      return `${num5 / 1000000000} gigaohms`;
    }else{return undefined}}
  const COLORS=["black","brown","red","orange","yellow","green","blue","violet","grey","white"]
  