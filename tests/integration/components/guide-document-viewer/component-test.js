import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('guide-document-viewer', 'Integration | Component | guide document viewer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{guide-document-viewer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#guide-document-viewer}}
      template block text
    {{/guide-document-viewer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
