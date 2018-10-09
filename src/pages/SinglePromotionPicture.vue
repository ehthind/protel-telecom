<template>
    <div class="wrapper">
        <div class="page-header page-header-small">
            <parallax class="page-header-image"
                style="background-image: url('img/bg32.jpg')">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto d-sm-block">
                        <h1 class="title">Major promotion</h1>
                        <n-button type = "primary">
                            <i class = "fa fa-heart"></i> More Info
                        </n-button>
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
    return {};
  },

  props: {},

  methods: {}
};
</script>