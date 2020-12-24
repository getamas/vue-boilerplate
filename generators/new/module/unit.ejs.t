---
to: src/store/modules/<%= h.changeCase.kebab(name) %>.spec.js
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.camel(fileName) + 'Module'
%>import * as <%= importName %> from './<%= fileName %>'

describe('@store/modules/<%= fileName %>', () => {
  it('exports a valid Vuex module', () => {
    expect(<%= importName %>).toBeAVuexModule()
  })
})
