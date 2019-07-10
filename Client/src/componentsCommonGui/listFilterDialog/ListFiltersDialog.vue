<template>
  <div class="teal lighten-5 pb-4 pt-2 pl-2 pr-2" style=" margin: auto;">
    
    <v-card color="mb-2">
      <div>
        <v-card color="mb-2">
        <div>
            <v-tabs v-model="recordActiveStatusFilter" 
                    :color="`${themeColor} darken-1`" 
                    dark 
                    fixed-tabs 
                    icons-and-text
                    slider-color="white">
                <v-tab key="0" ripple>
                    Current
                    <i class="fas fa-check-circle fa-2x pb-1"></i>
                </v-tab>
                <v-tab key="1" ripple>
                    Archived
                    <i class="fas fa-times-circle fa-2x pb-1"></i>
                </v-tab>
                <v-tab key="2" ripple>
                    All
                    <i class="fas fa-circle fa-2x pb-1"></i>
                </v-tab>       


                
                <v-tab-item key="0" >
                    <v-card flat>                        
                        <v-card-text>
                            <i class="fas fa-check-circle fa-2x pb-1"></i>&nbsp;
                            Show current data only, hide archived details
                        </v-card-text>
                    </v-card>
                </v-tab-item>

                <v-tab-item key="1"  >
                    <v-card flat>
                        <v-card-text>
                            <i class="fas fa-times-circle fa-2x pb-1"></i>&nbsp;
                            Show archived data only
                        </v-card-text>
                    </v-card>
                </v-tab-item>

                <v-tab-item key="2"  >
                    <v-card flat>                        
                        <v-card-text>
                            <i class="fas fa-circle fa-2x pb-1"></i>&nbsp;
                            Show all data, both current and archived
                            </v-card-text>
                    </v-card>
                </v-tab-item>

            </v-tabs>
            
        </div>

    </v-card>
      </div>
    </v-card>
  </div>
</template>

<script  lang="ts"  src='./ListFiltersDialog.ts'></script>