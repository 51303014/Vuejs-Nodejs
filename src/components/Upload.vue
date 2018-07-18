<template>
  <div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li><a routerLink="upload">Upload</a></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div class="app-box">
            <div class="container-fluid app-container">
              <div class="row">
                <div class="col-md-12">
                  <!-- D&D Zone-->
                  <div class="form-group">
                    <form class="dropzone" id="drag-and-drop-zone">
                      <vue-dropzone id="drop1" :options="config" @vdropzone-complete="afterComplete"></vue-dropzone>

                      <div class="fallback">
                        <label>
                          <span>Click to open the file Browser</span>
                          <input type="file" name="files" multiple="multiple" title='Click to add Files'>
                        </label>
                      </div>
                    </form>
                  </div>
                  <!-- /D&D Zone -->

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vueDropzone from "vue2-dropzone";


  export default {
    data: () => ({
      config: {
        url: "http://localhost:3003/api/upload",

      }
    }),
    components: {
      vueDropzone
    },
    methods: {
      afterComplete(file) {
      }
    }
  };</script>
<style lang="scss">
  @import "../assets/css/simple";
  @import "../assets/css/view-upload";
  @import "../assets/css/uploader";
  @import "../assets/css/dashboard";
</style>
