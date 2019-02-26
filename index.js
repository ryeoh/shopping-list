// Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
// Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
// Linking to your application JavaScript file from the index.html page.
// Using this and event delegation

// REQUIREMENTS:
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

// You must use a CDN-hosted version of jQuery
// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

$(function() {
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        const newItem = $("#shopping-list-entry").val();
        $(".shopping-list").append(
            `<li>
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`);
    });
    // When delete button is clicked, trigger the removal of the shopping item
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
      $(this).closest("li").remove();
    });

    // When check button is clicked, trigger the cross-out of item
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
      });
  });


// WHEN DONE:
// When you're done, push your work up to GitHub and publish it on GitHub Pages. Submit a link to your repo below. 