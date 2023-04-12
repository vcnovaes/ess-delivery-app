export function includePromotions(items: any[], promotionList: any[]) {
      const itemList: any[] = [];

      for(let i = 0; i < items.length; ++i) {
            items.forEach(item => {
                  const isItemInList = itemList.findIndex(i => i.id === item.id);

                  if(item.categoryId === promotionList[i].categoryId && !isItemInList) {
                        itemList.push({...item, promotion: {...promotionList[i]}});
                  }
                  else {
                        itemList.push({...item });
                  }
            })
      }

      return itemList;
}