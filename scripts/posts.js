$(document).ready(function () {
  let posts = [
    {
      label: "Practical Functional Programming",
      value: "Practical Functional Programming",
      author: "Steven Heidel",
      published: "Apr 29, 2017",
      postText:
        "The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “monads” or “immutability” or “side effects”. Instead it focuses on how thinking about composition can make you a better programmer, regardless of what language you use. ",
    },
    {
      label: "Writing CSS with Accessibility in Mind",
      value: "Writing CSS with Accessibility in Mind",
      author: "Manuel Matuzovic",
      published: "Sep 18, 2017",
      postText:
        "About a year ago I started to focus more on web accessibility. The most effective method of learning for me is teaching others. That’s one of the reasons why I’m talking at meetups and conferences and why I’m writing articles about the topic. I wrote about Progressive Enhancement for Smashing Magazine and about accessibility basics here on Medium. This article is the third in a series of collections of accessibility tips",
      source:
        "https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939",
    },
    {
      label: "Style Guides for Website Designs",
      value: "Style Guides for Website Designs",
      author: "DevWerkz",
      published: "Apr 7, 2021",
      postText:
        "As naturally visual creatures, sight is central to our every day. Social interactions, entertainment, and many other activities rely on visual cues to progress and be more immersive.In eCommerce, aesthetic appeal plays a crucial role in establishing consumer relationships. Leads form first impressions within 50 milliseconds of landing on your website, using colors, fonts, graphics, and layout to judge your brand.",
      source:
        "https://empash.medium.com/starting-as-a-front-end-developer-254d388d1562",
    },
  ];

  let constructPost = (postTitle, postAuthor, postPublished, postText) => {
    let postHtml = `
        <div class="post">
        <img src="./images/cover.png" class="post-img" alt="post-img" />
        <div class="post-details">
          <div class="post-title">
            <h1>${postTitle}</h1>
          </div>
          <div class="post-meta">
            Published by <span class="post-author">${postAuthor}</span> on
            <span class="post-published">${postPublished}</span>
          </div>
          <div class="post-text">
            <p>
              ${postText}
            </p>
          </div>
          <div class="post-tags">
            <a href="#" class="post-tag">#events</a>
            <a href="#" class="post-tag">#programming</a>
          </div>
          <div class="post-feedback item-separator">
            <ul>
              <li>1 like</li><li>2 comments</li><li>3 views</li>
            </ul>
          </div>
        </div>
      </div>
      `;

    return postHtml;
  };

  //Load posts
  let loadPosts = () => {
    $(".post-container").empty();
    posts.forEach((post) => {
      $(".post-container").append(
        constructPost(post.label, post.author, post.published, post.postText)
      );
    });
  };

  //Search funcionality
  $("#searchbar")
    .autocomplete({
      autoFocus: false,
      source: posts,
      select: (event, data) => {
          $(".post-container").empty();
          $(".post-container").append(
            constructPost(
              data.item.label,
              data.item.author,
              data.item.published,
              data.item.postText
            )
          );
              
          $(event.target).blur();
          this.value = "";
          return false;
      },
    })
    

  loadPosts();
});
