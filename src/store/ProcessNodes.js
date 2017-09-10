import Vue from 'vue'
export const NODE_LIST = 
[
    {
        id:0,
        name:'选择类目',
        type:'子节点',
        description:'这是描述',
        nodePreConditions:
        [
            {
                id:1,
                name:'商品类型',
                value:[]
            },
            {
                id:5,
                name:'开店时间',
                value:[]
            }
        ],
        pagePreConditions:
        [
            {
                id:1,
                name:'销售记录',
                value:[]
            },
            {
                id:2,
                name:'价格库存物流',
                value:[]
            }
        ],
        pagemodels:[]
    },
    {
        id:1,
        name:'是否选择模板',
        type:'子节点',
        description:'这是描述',
        nodePreConditions:[],
        pagePreConditions:[],
        pagemodels:[]
    },
    {
        id:2,
        name:'搜索、获取货品模板',
        type:'子节点',
        description:'这是描述',
        nodePreConditions:[],
        pagePreConditions:[],
        pagemodels:[]
    },
    {
        id:3,
        name:'填写商品信息',
        type:'子节点',
        description:'这是描述',
        nodePreConditions:[],
        pagePreConditions:[],
        pagemodels:[]
    },
    {
        id:4,
        name:'审核',
        type:'子节点',
        description:'这是描述',
        nodePreConditions:[],
        pagePreConditions:[],
        pagemodels:[]
    },
    {
        id:5,
        name:'机器审核',
        type:'子节点',
        description:'这是描述',
        nodePreConditions:[],
        pagePreConditions:[],
        pagemodels:[]
    },
    {
        id:6,
        name:'人工审核',
        type:'子节点',
        description:'这是描述',
        nodePreConditions:[],
        pagePreConditions:[],
        pagemodels:[]
    }
];

export const nodePerConOptionsSinle = 
[
    {"id":1,"name":"商品类型"},
    {"id":2,"name":"目标节点时限"},
    {"id":3,"name":"是否首次进入该节点"},
    {"id":4,"name":"商家信用等级"},
    {"id":5,"name":"开店时间"},
    {"id":6,"name":"转化率"},
    {"id":7,"name":"违规记录"},
    {"id":8,"name":"销售记录"},
    {"id":9,"name":"是否是良心卖家"},
    {"id":10,"name":"知名品牌高危质检"},
    {"id":11,"name":"冲突管理规则"}
];

export const nodePerConOptionsMutile = 
[
    {"id":1,"name":"类型1"},
    {"id":2,"name":"类型2"},
    {"id":3,"name":"类型3"}
];

export const pagePerConOptionsSinle = 
[
    {"id":1,"name":"销售记录"},
    {"id":2,"name":"价格库存物流"},
    {"id":3,"name":"产品信息"},
    {"id":4,"name":"特定类目规则"},
    {"id":5,"name":"开店时间"},
    {"id":6,"name":"转化率"},
    {"id":7,"name":"违规记录"},
    {"id":8,"name":"销售记录"},
    {"id":9,"name":"是否是良心卖家"},
    {"id":10,"name":"知名品牌高危质检"},
    {"id":11,"name":"冲突管理规则"}
];

export const pagePerConOptionsMutile = 
[
    {"id":1,"name":"类型1"},
    {"id":2,"name":"类型2"},
    {"id":3,"name":"类型3"}
];


export const pageModels=
[
    {
    "id":11,
    "name":"页面模板1",
    "imgPath":"static/img/page1.png"
    },
    {
        "id":12,
        "name":"页面模板2",
        "imgPath":"static/img/page2.png"
    },
    {
        "id":13,
        "name":"页面模板3",
        "imgPath":"static/img/page3.png"
    },
];



export default{
    NODE_LIST,
    nodePerConOptionsSinle,
    nodePerConOptionsMutile,
    pagePerConOptionsSinle,
    pagePerConOptionsMutile,
    pageModels
}

