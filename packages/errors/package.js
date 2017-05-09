Package.describe({
  name: 'navyboys:errors',
  version: '0.0.1',
  summary: "A pattern to display application errors to the user",
  git: '',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('navyboys:errors', 'client');
  api.use(['templating', 'tinytest', 'test-helpers'], 'client');
  api.addFiles('errors_tests.js', 'client');
});
