const dataLine = [
  {
    year: "18 Apr",
    value: 0,
  },
  {
    year: "19 Apr",
    value: 0,
  },

  {
    year: "20 Apr",
    value: 0,
  },
  {
    year: "21 Apr",
    value: 5,
  },
  {
    year: "22 Apr",
    value: 0,
  },
  {
    year: "23 Apr",
    value: 0,
  },
  {
    year: "24 Apr",
    value: 3,
  },
];
const dataLineHourly = [
  {
    year: "12 AM",
    value: 0,
  },
  {
    year: "01 AM",
    value: 0,
  },

  {
    year: "02 AM",
    value: 0,
  },
  {
    year: "03 AM",
    value: 5,
  },
  {
    year: "04 AM",
    value: 0,
  },
  {
    year: "05 AM",
    value: 0,
  },
  {
    year: "06 AM",
    value: 3,
  },
  {
    year: "07 AM",
    value: 0,
  },
  {
    year: "08 AM",
    value: 0,
  },
  {
    year: "09 AM",
    value: 1,
  },
  {
    year: "10 AM",
    value: 0,
  },
  {
    year: "11 AM",
    value: 0,
  },
  {
    year: "12 PM",
    value: 0,
  },
  {
    year: "01 PM",
    value: 0,
  },
  {
    year: "02 PM",
    value: 0,
  },
  {
    year: "03 PM",
    value: 0,
  },
  {
    year: "04 PM",
    value: 0,
  },
  {
    year: "05 PM",
    value: 8,
  },
  {
    year: "06 PM",
    value: 0,
  },
  {
    year: "07 PM",
    value: 4,
  },
  {
    year: "08 PM",
    value: 0,
  },
  {
    year: "09 PM",
    value: 0,
  },
  {
    year: "10 PM",
    value: 0,
  },
];
var dataBar = [
  {
    action: "october",
    pv: 50000,
  },
  {
    action: "septamper",
    pv: 35000,
  },
  {
    action: "november",
    pv: 25000,
  },
  {
    action: "december",
    pv: 15000,
  },
  {
    action: "january",
    pv: 8500,
  },
];
export const configBar = {
  data: dataBar,
  xField: "pv",
  yField: "action",
  conversionTag: {},
};
export const configLine = {
  data: dataLine,
  // autoFit,
  xField: "year",
  yField: "value",
  label: {
    style: {
      fontSize: 18,
      fontWeight: 500,
      textAlign: "center",
      // textBaseline: 'middle',
      shadowColor: "white",
      shadowBlur: 10,
      // paddingBottom : 5,
    },
  },
  point: {
    size: 5,
    shape: "diamond",
    style: {
      fill: "white",
      stroke: "#5B8FF9",
      lineWidth: 2,
    },
  },
  tooltip: { showMarkers: false },
  state: {
    active: {
      style: {
        shadowColor: "yellow",
        shadowBlur: 4,
        stroke: "transparent",
        fill: "red",
      },
    },
  },
  theme: {
    geometries: {
      point: {
        diamond: {
          active: {
            style: {
              shadowColor: "#FCEBB9",
              shadowBlur: 2,
              stroke: "#F6BD16",
            },
          },
        },
      },
    },
  },
  interactions: [{ type: "marker-active" }],
};

export const configLineHourly = {
  data: dataLineHourly,
  xField: "year",
  yField: "value",
  // padding : 80,
  label: {
    style: {
      fontSize: 18,
      fontWeight: 500,
      textAlign: "center",
      // textBaseline: 'middle',
      shadowColor: "white",
      shadowBlur: 10,
      // paddingBottom : 5,
    },
  },
  point: {
    size: 5,
    shape: "diamond",
    style: {
      fill: "white",
      stroke: "#5B8FF9",
      lineWidth: 2,
    },
  },
  tooltip: { showMarkers: false },
  state: {
    active: {
      style: {
        shadowColor: "yellow",
        shadowBlur: 4,
        stroke: "transparent",
        fill: "red",
      },
    },
  },
  theme: {
    geometries: {
      point: {
        diamond: {
          active: {
            style: {
              shadowColor: "#FCEBB9",
              shadowBlur: 2,
              stroke: "#F6BD16",
            },
          },
        },
      },
    },
  },
  interactions: [{ type: "marker-active" }],
};

export const branchcolumns = [
  {
    title: "Branch",
    dataIndex: "name",
  },
  {
    title: "Active Orders",
    dataIndex: "age",
  },
  {
    title: "Active Orders Amount",
    dataIndex: "key",
  },
  {
    title: "Occupied Tables",
    dataIndex: "Occupied",
  },
  {
    title: "Offline Cashiers",
    dataIndex: "Occupied",
  },
  {
    title: "Last Sync",
    dataIndex: "age",
  },
  {
    title: "Last Order",
    dataIndex: "lastorder",
  },
];

export const branchdata = [
  {
    key: "1",
    name: "Branch 1 (B01)",
    age: 32,
    address: "New York No. 1 Lake Park",
    Occupied: "0/0",
    lastorder: "Wed Mar 24 2021 14:43:42",
  },
  {
    key: "2",
    name: "Branch 12 (B012)",
    age: 42,
    address: "New York No. 1 Lake Park",
    Occupied: "0/0",
    lastorder: "Wed Mar 24 2021 14:43:42",
  },
];

export const Paymentscolumns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
  },
  {
    title: "Added",
    dataIndex: "Added",
  },
];

export const Paymentsdata = [
  {
    key: "1",
    name: "Cash",
    Amount: "SAR 183	",
    Added: "Wed Mar 24 2021 14:43:42",
  },
];

export const Productscolumns = [
  {
    title: "Quantity",
    dataIndex: "key",
  },
  {
    title: "Item",
    dataIndex: "Item",
  },
  {
    title: "Unit Price",
    dataIndex: "Amount",
  },
  {
    title: "Discount",
    dataIndex: "Discount",
  },
  {
    title: "Discount",
    dataIndex: "Discount",
  },
  {
    title: "Total Price",
    dataIndex: "Amount",
  },
];

export const Productsdata = [
  {
    key: "1",
    Item: "orange ice",
    Amount: "SAR 183	",
    Discount: "-",
    Added: "Wed Mar 24 2021 14:43:42",
  },
  {
    key: "6",
    Item: "Meat kofta",
    Amount: "SAR 183	",
    Discount: "-",
    Added: "Wed Mar 24 2021 14:43:42",
  },
];

export const branchescolumns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Reference",
    dataIndex: "reference",
  },
];

export const branchesdata = [
  {
    key: "1",
    name: "Branch 1",
    reference: "B01",
  },
  {
    key: "2",
    name: "Branch 2",
    reference: "B02",
  },
];

export const InventoryHistorycolumns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "SKU",
    dataIndex: "SKU",
  },
  {
    title: "Barcode",
    dataIndex: "Barcode",
  },
  {
    title: "Storage Unit",
    dataIndex: "StorageUnit",
  },
  {
    title: "Branch",
    dataIndex: "Branch",
  },
  {
    title: "Transaction Type",
    dataIndex: "TransactionType",
  },
  {
    title: "Transaction Reference",
    dataIndex: "TransactionReference",
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
  },
  {
    title: "Cost",
    dataIndex: "Cost",
  },
  {
    title: "Reason",
    dataIndex: "Reason",
  },
  {
    title: "Notes",
    dataIndex: "Notes",
  },
  {
    title: "Created By",
    dataIndex: "CreatedBy",
  },
  {
    title: "Submitted By",
    dataIndex: "SubmittedBy",
  },
  {
    title: "Submitted At",
    dataIndex: "SubmittedAt",
  },
];

export const InventoryHistorydata = [
  {
    key: "1",
    name: "Meat kofta",
    SKU: "sk-0003",
    Barcode: "-",
    StorageUnit: "Unit",
    Branch: "Branch 1",
    TransactionType: "Opening",
    TransactionReference: "-",
    Quantity: "2",
    Cost: "0",
    Reason: "-",
    Notes: "-",
    CreatedBy: "-",
    SubmittedBy: "-",
    SubmittedAt: "May 01, 12:31am",
  },
  {
    key: "2",
    name: "pepsi",
    SKU: "sk-0003",
    Barcode: "-",
    StorageUnit: "Unit",
    Branch: "Branch 1",
    TransactionType: "Opening",
    TransactionReference: "-",
    Quantity: "2",
    Cost: "0",
    Reason: "-",
    Notes: "-",
    CreatedBy: "-",
    SubmittedBy: "-",
    SubmittedAt: "May 01, 12:31am",
  },
  {
    key: "3",
    name: "Meat kofta",
    SKU: "sk-0003",
    Barcode: "-",
    StorageUnit: "Unit",
    Branch: "Branch 1",
    TransactionType: "Opening",
    TransactionReference: "-",
    Quantity: "2",
    Cost: "0",
    Reason: "-",
    Notes: "-",
    CreatedBy: "-",
    SubmittedBy: "-",
    SubmittedAt: "May 01, 12:31am",
  },
];

export const InventoryLevelscolumns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "SKU",
    dataIndex: "SKU",
  },
  {
    title: "Barcode",
    dataIndex: "Barcode",
  },
  {
    title: "Storage Unit",
    dataIndex: "StorageUnit",
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
  },
  {
    title: "Cost Per Unit",
    dataIndex: "CostPerUnit",
  },
  {
    title: "Total Cost",
    dataIndex: "TotalCost",
  },
];

export const InventoryLevelsdata = [
  {
    key: "1",
    name: "Meat kofta",
    SKU: "sk-0003",
    Barcode: "-",
    StorageUnit: "Unit",
    Quantity: "2",
    TotalCost: "0",
    CostPerUnit: "0",
  },
  {
    key: "2",
    name: "pepsi",
    SKU: "sk-0003",
    Barcode: "-",
    StorageUnit: "Unit",
    Quantity: "2",
    TotalCost: "0",
    CostPerUnit: "0",
  },
  {
    key: "3",
    name: "Meat kofta",
    SKU: "sk-0003",
    Barcode: "-",
    StorageUnit: "Unit",
    Quantity: "2",
    TotalCost: "0",
    CostPerUnit: "0",
  },
];

export const PaymentsReportscolumns = [

  {
    title: "Payment Method",
    dataIndex: "PaymentMethod",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
  },
  {
    title: "Count",
    dataIndex: "Count",
  },
  {
    title: "Return Amount",
    dataIndex: "ReturnAmount",
  },
  {
    title: "Return Count",
    dataIndex: "ReturnCount",
  },
  {
    title: "Tips",
    dataIndex: "Tips",
  },
];

export const PaymentsReportsdata = [
  {
    key: "1",
    PaymentMethod: "Cash",
    Amount: "829.050",
    Count: "7", 
    ReturnAmount: "2",
    ReturnCount: "0",
    Tips: "0",
  },
];

export const ProductCostReportscolumns = [
  {
    title: "Name",
    dataIndex: "Name",
  },
  {
    title: "SKU",
    dataIndex: "SKU",
  },
  {
    title: "Costing Method",
    dataIndex: "CostingMethod",
  },
  {
    title: "Cost",
    dataIndex: "Cost",
  },
];

export const ProductCostReportscolumnsdata = [
  {
    key: "1",
    Name: "water",
    SKU: "sk-0008",
    CostingMethod: "From Ingredients",
    Cost: "0",
  },
  {
    key: "2",
    Name: "VEGGIE SUPREME",
    SKU: "sk-0006",
    CostingMethod: "From Ingredients",
    Cost: "10",
  },
  {
    key: "3",
    Name: "Meat kofta",
    SKU: "sk-0004",
    CostingMethod: "Fixed Cost",
    Cost: "6",
  },
  {
    key: "4",
    Name: "water",
    SKU: "sk-0003",
    CostingMethod: "From Ingredients",
    Cost: "4",
  },
];

export const tagsList = [
  {
    title: "Customer Tag",
    list: [
      {
      name : "Citizens",
      numbers : 5
    },
      {
      name : "Vip",
      numbers : 1
    },
  ],
    empty_desc:
      "Create tags to help you filter and group customers easily. You can create tags such as VIP Customers, Citizens, etc.",
  },
  {
    title: "Branch Tag",
    list: [],
    empty_desc:
      "Create tags to help you filter and group branches easily. You can create tags such as Mall Branches, High Traffic, etc.",
  },
  {
    title: "Inventory Item Tag",
    list: [],
    empty_desc:
      "Create inventory items tags to help you filter and group items easily. You can create tags such as Weekly Stocktaking, Vegetables, etc.",
  },
  {
    title: "Order Tag",
    list: [],
    empty_desc:
      "Create tags to help you filter and group orders easily. You can create tags such as Phone orders, VIP Delivery, etc.",
  },
  {
    title: "Supplier Tag",
    list: [],
    empty_desc:
      "Create tags to help you filter and group suppliers easily. You can create tags such as Cash Suppliers, High Quality, etc.",
  },
];
