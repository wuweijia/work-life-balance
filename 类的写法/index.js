const detectionList = [
  {
    userId: 'userId',
    defaultBarcode: '111-1342-2634',
    detections: [
      {
        barcode: '111-1342-2634',
        product: {
          id: '1',
          supportSubmodules: ['ancestor', 'sport15', 'pregnancy', 'standard'],
          isOnlineProduct: true,
        },
      },
    ],
  },
  {
    userId: 'userId',
    defaultBarcode: '111-1315-6666',
    detections: [
      {
        barcode: '111-1315-6666',
        product: {
          id: '2',
          supportSubmodules: ['sport15', 'pregnancy', 'standard'],
          isOnlineProduct: true,
        },
      },
    ],
  },
  {
    userId: 'userId',
    defaultBarcode: '111-1315-8888',
    detections: [
      {
        barcode: '111-1315-8888',
        product: {
          id: '3',
          supportSubmodules: ['childTalent', 'ancestor', 'sport15', 'pregnancy', 'standard'],
          isOnlineProduct: true,
        },
      },
    ],

  },
  {
    userId: 'userId',
    defaultBarcode: '111-1315-9999',
    detections: [
      {
        barcode: '111-1315-9999',
        product: {
          id: '4',
          supportSubmodules: ['child36', 'sport15'],
          isOnlineProduct: false,
        },
      },
    ],
  },
]

let sctList = []
for (let index = 0; index < detectionList.length; index++) {
  const element = detectionList[index]
  const defaultBarcodeInfo = element.detections.find(item => item.barcode === element.defaultBarcode)
  console.log('-------', defaultBarcodeInfo);

  const detectionInfo = {
    ...element,
    ...defaultBarcodeInfo,
    ...element.basic,
    // productId: defaultBarcodeInfo.product.id,
    isBind: !(element.share && element.share.isShare),
  }
  sctList.push(detectionInfo)
}
