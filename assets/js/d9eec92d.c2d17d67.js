(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[8928],{54158:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),s=n(67294),o=n(3905),i=n(41904),l=n(16589),d=["components"],m={id:"from",title:"From HTML Table",keywords:["javascript","table","javascript table","gridjs","grid js","html","html elements"]},p={unversionedId:"examples/from",id:"examples/from",isDocsHomePage:!1,title:"From HTML Table",description:"In this examples, we load the data from an existing HTML table",source:"@site/docs/examples/from.md",sourceDirName:"examples",slug:"/examples/from",permalink:"/docs/examples/from",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/from.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592139438,formattedLastUpdatedAt:"6/14/2020",frontMatter:{id:"from",title:"From HTML Table",keywords:["javascript","table","javascript table","gridjs","grid js","html","html elements"]},sidebar:"sidebar",previous:{title:"Hello, World!",permalink:"/docs/examples/hello-world"},next:{title:"Pagination",permalink:"/docs/examples/pagination"}},c=[],f={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this examples, we load the data from an existing HTML table"),(0,o.kt)(l.Z,{children:"\nfunction () {\n  const tableRef = useRef(null);\n  const wrapperRef = useRef(null);\n  \n  useEffect(() => {\n    const grid = new Grid({\n      from: tableRef.current,\n    }).render(wrapperRef.current);\n  });\n  \n  return (\n    <>\n      <table ref={tableRef}>\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Email</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>John</td>\n            <td>john@example.com</td>\n          </tr>\n          <tr>\n            <td>Mike</td>\n            <td><b>mike@example.com</b></td>\n          </tr>\n        </tbody>\n      </table>\n      <div ref={wrapperRef} />\n    </>\n  );\n}\n",live:!0,scope:{Grid:i.rj,CodeBlock:l.Z,useEffect:s.useEffect,useRef:s.useRef},mdxType:"CodeBlock"}))}u.isMDXComponent=!0}}]);