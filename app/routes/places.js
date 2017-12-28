import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  return [{
    id: '1',
    title: 'Abandoned populated place',
    city: 'Pröbsten'
  }, {
    id: '2',
    title: 'Abandoned populated place',
    city: 'Boestlingen'
  }, {
    id: '3',
    title: 'Abandoned populated place',
    city: 'Benhorn'
  }];
}
});
