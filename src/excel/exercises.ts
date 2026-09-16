import type {Cells,Value} from './engine';
export type Exercise={cells:Cells;target:string;expected:Value;copyRows?:number;copiedExpected?:Value[];alternatives?:{cells:Cells;expected:Value}[]};
const column=(col:string,values:(string|number|null)[],start=2):Cells=>Object.fromEntries(values.map((v,i)=>[col+(i+start),v]));
export const exercises:Record<string,Exercise>={
 'excel-sum':{cells:{...column('B',[10,20,30,40,50])},target:'B7',expected:150,alternatives:[{cells:column('B',[1,2,3,4,5]),expected:15}]},
 'excel-absolute':{cells:{...column('B',[80,120,200]),E1:.1},target:'C2',expected:8,copyRows:2,copiedExpected:[12,20]},
 'excel-average':{cells:column('A',[10,null,20,30]),target:'C2',expected:20,alternatives:[{cells:column('A',[10,0,20,30]),expected:15}]},
 'excel-conditional':{cells:{...column('A',['East','West','East','East']),...column('B',['Paid','Paid','Open','Paid']),...column('C',[100,80,50,20])},target:'E2',expected:120,alternatives:[{cells:{C2:200},expected:220}]},
 'excel-lookup':{cells:{...column('A',['P10','P20','P30']),...column('B',[12,18,25]),E2:'P20'},target:'F2',expected:18,alternatives:[{cells:{E2:'ZZ'},expected:'Missing'}]},
 'excel-duplicates':{cells:column('A',['Ada','Ben','Ada','Ada','Ben']),target:'B2',expected:false,copyRows:4,copiedExpected:[false,true,true,true]},
 'excel-filter':{cells:{...column('A',['Ben','Ada','Ben','Cara','Ada','Dan']),...column('B',['Paid','Open','Paid','Paid','Paid','Open'])},target:'D2',expected:['Ada','Ben','Cara'],alternatives:[{cells:{A5:''},expected:['Ada','Ben']}]},
 'excel-weighted':{cells:{...column('B',[60,80,100]),...column('C',[1,2,7])},target:'E2',expected:92,alternatives:[{cells:{C4:1},expected:80}]},
 'excel-sum-error':{cells:column('A',[10,'#N/A',20,5]),target:'C2',expected:35,alternatives:[{cells:{A2:40},expected:65}]},
 'excel-invoice':{cells:{...column('A',['Notebook','Pen','Folder']),...column('B',[35,8,12]),...column('C',[4,10,3])},target:'D2',expected:140,copyRows:2,copiedExpected:[80,36]},
 'excel-discount':{cells:{...column('A',['Desk','Lamp','Chair']),...column('B',[200,80,150]),...column('C',[.15,.1,.2])},target:'D2',expected:170,copyRows:2,copiedExpected:[72,120]},
 'excel-bonus':{cells:{...column('A',['Ada','Ben','Cara']),...column('B',[12000,8000,10000])},target:'C2',expected:600,copyRows:2,copiedExpected:[0,500]},
 'excel-invoice-repeat':{cells:column('A',['INV-01','INV-02','INV-01','INV-03','INV-02']),target:'B2',expected:false,copyRows:4,copiedExpected:[false,true,false,true]},
 'excel-paid-report':{cells:{...column('A',['Ada','Ben','Ada','Cara','Dan','Cara']),...column('B',['Paid','Paid','Open','Paid','Open','Paid']),...column('C',[600,200,900,500,800,700])},target:'E2',expected:['Ada','Cara'],alternatives:[{cells:{B2:'Open'},expected:['Cara']}]},
 'excel-order-price':{cells:{...column('A',['P10','P30','ZZ']),...column('B',[3,2,4]),...column('E',['P10','P20','P30']),...column('F',[12,18,25])},target:'C2',expected:36,copyRows:2,copiedExpected:[50,0]},
};
