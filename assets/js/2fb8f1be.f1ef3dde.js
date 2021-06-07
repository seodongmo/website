(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[2858],{8008:function(e,t,r){"use strict";r.d(t,{$:function(){return d}});var n=r(93552),s=r(41904),a={search:{placeholder:"\ud83d\udd0d Busqueda..."},sort:{sortAsc:"Ordenar la columna en orden ascendente",sortDesc:"Ordenar la columna en orden descendente"},pagination:{previous:"Anterior",next:"Siguiente",navigate:function(e,t){return"P\xe1gina "+e+" de "+t},page:function(e){return"P\xe1gina "+e},showing:"Mostrando los resultados",of:"sobre",to:"a",results:""},loading:"Cargando...",noRecordsFound:"Nig\xfan resultado encontrado",error:"Se produjo un error al recuperar datos"},o={search:{placeholder:"\ud83d\udd0d Recherche..."},sort:{sortAsc:"Trier la colonne dans l'ordre croissant",sortDesc:"Trier la colonne dans l'ordre d\xe9croissant"},pagination:{previous:"Pr\xe9c\xe9dent",next:"Suivant",navigate:function(e,t){return"Page "+e+" de "+t},page:function(e){return"Page "+e},showing:"Affichage des r\xe9sultats",of:"sur",to:"\xe0",results:""},loading:"Chargement...",noRecordsFound:"Aucun r\xe9sultat trouv\xe9",error:"Une erreur est survenue lors de la r\xe9cup\xe9ration des donn\xe9es"},i=r(16589),c=r(67294),l=r(85384),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return c.createElement(i.Z,{children:this.props.children,transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:Object.assign({Grid:s.rj,html:s.dy,h:s.h,gCreateRef:s.Vf,gComponent:s.wA,PluginPosition:s.t8,BaseComponent:s.H6,CodeBlock:i.Z,useEffect:c.useEffect,useRef:c.useRef,faker:l,esES:a,frFR:o},this.props.scope)})},t}(c.Component)},41758:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(22122),s=r(19756),a=(r(67294),r(3905)),o=r(8008),i=r(69259),c=r.n(i),l=["components"],d={id:"stock-market",title:"Stock Market",keywords:["javascript","table","javascript table","gridjs","grid js","formatting","stock market"]},u={unversionedId:"examples/stock-market",id:"examples/stock-market",isDocsHomePage:!1,title:"Stock Market",description:"Grid.js can render complex elements in the table cells. In this example, we will take advantage of the builtin Virtual DOM",source:"@site/docs/examples/stock-market.md",sourceDirName:"examples",slug:"/examples/stock-market",permalink:"/docs/examples/stock-market",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/stock-market.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,formattedLastUpdatedAt:"7/1/2020",frontMatter:{id:"stock-market",title:"Stock Market",keywords:["javascript","table","javascript table","gridjs","grid js","formatting","stock market"]},sidebar:"sidebar",previous:{title:"Custom sort",permalink:"/docs/examples/custom-sort"},next:{title:"Events",permalink:"/docs/examples/event-handler"}},p=[],f={toc:p};function m(e){var t=e.components,r=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Grid.js can render complex elements in the table cells. In this example, we will take advantage of the builtin Virtual DOM\nand Chartist library to render line charts in cells."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Grid, h, createRef as gCreateRef } from \"gridjs\";\nimport Chartist from 'chartist';\n")),(0,a.kt)(o.$,{children:"\n// Chartist options\nconst opts = {\n  height: '30px',\n  showPoint: false,\n  fullWidth:true,\n  chartPadding: {top: 0,right: 0,bottom: 0,left: 0},\n  axisX: {showGrid: false, showLabel: false, offset: 0},\n  axisY: {showGrid: false, showLabel: false, offset: 0}\n};\nconst grid = new Grid({\n  sort: true,\n  columns: [\n    'Symbol',\n    'Last price',\n    { \n      name: 'Difference', \n      formatter: (cell) => {\n        return h('b', { style: {\n          'color': cell > 0 ? 'green' : 'red'\n        }}, cell);\n      }\n    },\n    {\n      name: 'Trend',\n      sort: false,\n      width: '100px',\n      formatter: (cell) => {\n        const ref = gCreateRef();\n        const chart = h('div', { ref: ref })\n        \n        // setTimeout to ensure that the chart wrapper is mounted\n        setTimeout(() => {\n          // render the chart based on cell data\n          ref.current && new Chartist.Line(ref.current, {\n            series: [cell]\n          }, opts);\n        }, 0);\n        \n        return chart;\n      }\n    }],\n  data: [\n    ['AAPL', 360.2, 20.19, [360, 363, 366, 361, 366, 350, 370]],\n    ['ETSY', 102.1, 8.22, [90, 91, 92, 90, 94, 95, 99, 102]],\n    ['AMZN', 2734.8, -30.01, [2779, 2786, 2792, 2780, 2750, 2765, 2740, 2734]],\n    ['TSLA', 960.85, -40.91, [993, 990, 985, 983, 970, 985, 988, 960]],\n  ]\n});\n",scope:{Chartist:c()},mdxType:"LiveExample"}))}m.isMDXComponent=!0}}]);