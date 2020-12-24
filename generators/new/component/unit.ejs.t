---
to: "src/app/components/<%= h.changeCase.kebab(name) %>.spec.js"
---

<%
const fileName = h.changeCase.kebab(name).toLowerCase()
const importName = h.changeCase.pascal(name)
%>import <%= importName %> from './<%= fileName %>'

describe('@components/<%= fileName %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent()
  })
})
