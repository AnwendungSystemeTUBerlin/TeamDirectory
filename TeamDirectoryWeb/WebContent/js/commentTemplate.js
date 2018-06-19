function Comment ({ name, date, time, text }){
    return `
  <div class="media d-block d-md-flex mt-4">
    <img class="commentAuthorPhoto card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image">
    <div class="media-body text-center text-md-left ml-md-3 ml-0">
      <h5 class="font-weight-bold mt-0">
        <a class="commentAuthor" href="">${name}</a>
        <P class="commentDate">
            ${date}
        </P>
        <P class="commentTime">
            ${time}
        </P>
      </h5>
      <p class="commentText">
          ${text}
      </p>
    </div>
  </div>
`}
