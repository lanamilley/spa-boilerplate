
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'block': 'rule',
      'fib': 'spiral'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // Block Route
    block: function() {
      console.log('Navigating to Block Page');
      App.views['block'].render();
    },

    // Rule Route
    rule: function() {
      console.log('Navigating to Rule Page');
      App.views['rule'].render();
    },

    // Sequence Route
    fib: function() {
      console.log('Navigating to Sequence Page');
      App.views['fib'].render();
    },

    // Spiral Route
    spiral: function() {
      console.log('Navigating to Spiral Page');
      App.views['spiral'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      block: new BlockView(),
      rule: new RuleView(),
      fib: new FibView(),
      spiral: new SpiralView()
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title: '<h2>Home Page</h2>',
        content: '<p>How then do you use this magic number in the composition of your web page? The math may seem like a stifling box that your creativity will struggle in, but the golden ratio is simply a useful guideline. Having a basic guideline to build from can end up giving you more creative room by taking some of the guesswork out of proportions and placement. Think of it as a tool instead of a cage. Templates allow to construct own grid schemes in a drag-and-drop action, flipping, layering, and zooming them. Build your grids depending on the projects need, and your professional sense of design, making sure that the golden ratio principles supplement your work with divine proportions.</p>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Block View
  // -----------------------------

  var BlockView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#block',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title: '<h2>Block divine composition</h2>',
        content: '<p>At its most basic, you can use the golden ratio to designate the size and placement of content areas and side bars. A fixed-width layout is the easiest application. Decide on the overall size of your layout via the method for creating a golden rectangle. Remember that your rectangle can be flipped around to suit your purposes, putting the sidebar at the top, bottom, or opposite side. As long as the ratio holds, your design will feel harmonious.</p>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Rule View
  // -----------------------------

  var RuleView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#rule',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title: '<h2>The rule of thirds</h2>',
        content: '<p>If math is not your cup of tea, the concept of the golden ratio can be simplified. The rule of thirds governs the placement of points of interest in a scene. Divide any given image into thirds both horizontally and vertically. Youll get 9 grids. According to the rule of thirds, the vertices of those lines (where the lines cross) are the ideal placement for points of interest. People scanning the page are more likely to notice things placed near the points, and the division is comfortable to view. More complex design is possible by breaking down those thirds into further thirds. In short, the eye can be lazy and not have to search for important details. Our brains like this. Major images, news boxes, search bars and any other points of interest can be nestled on or near the vertices. This neat little shortcut will give you a design that is both easy on the eyes and makes people drawn to key pieces of data.</p>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Sequence View
  // -----------------------------

  var FibView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#fib',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h2>Fibonacci Sequence</h2>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Spiral View
  // -----------------------------

  var SpiralView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#spiral',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h2>Golden spiral</h2>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  $(document).delegate('a', 'click', function(e) {
    e.preventDefault();
    App.router.navigate($(this).attr('href'), { trigger: true });

  });


});