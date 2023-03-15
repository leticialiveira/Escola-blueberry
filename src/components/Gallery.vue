<script>
export default {
    data: () => ({
      tab: null,
      n: 0
    }),
    methods: {
      test() {
        alert('Voce clicou na foto!')
      }
    }
  }
</script>

<template>
    <v-card>
        <v-tabs
        v-model="tab"
        color="#32279B"
        align-tabs="center"
        >
        <v-tab class='color-tab-gallery' :value="2">Escola</v-tab>
        <v-tab class='color-tab-gallery' :value="3">Turmas</v-tab>
        <v-tab class='color-tab-gallery' :value="4">Feira das nações</v-tab>
        <v-tab class='color-tab-gallery' :value="5">Gincana</v-tab>
        <v-tab class='color-tab-gallery' :value="6">Formandos</v-tab>
        </v-tabs>
        <v-window v-model="tab">
        <v-window-item
            v-for="n in 6"
            :key="n"
            :value="n"
        >
            <v-container fluid>
            <v-row>
                <v-col
                v-for="i in 12"
                :key="i"
                md="3"
                >
                <v-img
                    :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`" 
                    :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`" 
                    aspect-ratio="1"
                    :onclick="test"
                ></v-img>
                </v-col>
            </v-row>
            </v-container>
        </v-window-item>
        </v-window>
    </v-card>
</template>

<style>
.v-card .v-tabs{
  background-color:#32279B;
}

.v-card .v-tab {
  color: #F8F8FF;
  border: 0;
}
.v-card .v-container {
  background-color:#F8F8FF;
}


.color-tab-gallery {
  color: #F8F8FF;
}
.v-img:hover{
  transform: scale(1.3);
}
</style>