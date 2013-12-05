S3 Direct Upload Example
========================

This application was a result of [this](https://github.com/waynehoover/s3_direct_upload/issues/108). There was no simple example on how to use the `s3_direct_upload` [Gem for Rails](https://github.com/waynehoover/s3_direct_upload), so I decided to make one.


**Deployed Version:** See the app in action on [Heroku](https://s3directuploadexample.herokuapp.com/view) (*Max File Size: 2MB*).


Getting Started
---------------

1. Fork/Clone the repo

2. Sign up for AWS S3 & set up **AWS Access Keys** ([How?](https://console.aws.amazon.com/iam/home?#security_credential))

3. Create a Bucket and set the following `CORS Configuration`:

  ```
  <CORSConfiguration>
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
  </CORSConfiguration>
  ```

4. Since your `s3_direct_upload.rb` initializer file is already set up, you just need to **Export your AWS Credentials** to environment (For Heroku, [see this](https://devcenter.heroku.com/articles/config-vars#setting-up-config-vars-for-a-deployed-application))
     
  ```
  export AWS_S3_BUCKET=your-bucket-name
  export AWS_ACCESS_KEY_ID=your-aws-access-key-id
  export AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
  ``` 

5. **Everything's done!** Start your rails server, and navigate to `http://0.0.0.0:3000` to see the app in action. 



Where to go from here?
----------------------

- Read the [Official Documentation](https://github.com/waynehoover/s3_direct_upload) for `s3_direct_upload`
- Understand the code. Important files to see are:
   - `config/initializers/s3_direct_upload.rb`
   - `app/views/documents/index.html.erb`
   - `app/assets/javascripts/application.js`
- Other, not-so-important files that've been changed:
   - `config/routes.rb`
   - `app/models/document.rb`
   - `app/controllers/documents_controller.rb`
   - `app/assets/stylesheets/application.css`



Monkey Patch
------------

This gem didn't work at first for me and [a couple of these guys](https://github.com/waynehoover/s3_direct_upload/issues/30). Turns out it had something to do with the URLs of the S3 Buckets. The problem was solved thanks to the [Monkey Patch by @k13n](https://github.com/waynehoover/s3_direct_upload/issues/30#issuecomment-14719437). I've added this patch to `config/initializers/s3_direct_upload.rb` file despite the fact that [these URLs are slower](https://github.com/waynehoover/s3_direct_upload/issues/30#issuecomment-14787558).

If you're feeling brave, try using the app without the patch.

   

Other Crap
----------

The code wasn't meant to offend anyone. I only tried to make a simple example to get people started with the beautiful `s3_direct_upload` gem. If you find something that can be done in a better (and simpler) way, do let me know.
