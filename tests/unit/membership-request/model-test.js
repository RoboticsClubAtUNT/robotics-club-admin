import { moduleForModel, test } from 'ember-qunit';

moduleForModel('membership-request', 'Unit | Model | membership request', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
