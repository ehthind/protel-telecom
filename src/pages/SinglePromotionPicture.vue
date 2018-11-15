<template>
    <div class="wrapper">
            <div class="page-header page-header-small">
            <parallax class="page-header-image"
                :style="{ 'background-image': 'url(' + promoteImgUrl + ')' }">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto d-sm-block">
                        <h1 class="title">Major promotion</h1>
                        <router-link to = "/learn" class = "btn btn-primary btn-lg">
                            <i class="fa fa-heart">More info</i>
                        </router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Button } from "@/components";

export default {
  components: {
    [Button.name]: Button
  },

  data: function() {
    return {
        promoteImgUrl: "img/protel-imgs/replace_and_save_02.png",
    };
  },

  props: {},

  methods: {}
};
</script>

