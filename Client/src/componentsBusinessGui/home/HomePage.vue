<template>
  <crm-element-page>
    <crm-element-title :iconCss="`${ComponentIconConstants.HomeIcon}`">VueJS Component Test Harness</crm-element-title>

    <div class="mt-4">
      <div class="font-weight-light headline primary--text pa-2">Introduction</div>

      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs4>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Develop</div>
                  <div>The VueJS Component Test Harness allows teams to create, test, maintain and share common components.</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Test</div>
                  <div>Components can be testing in realtime by a developer, tester and even front end users. The controls will react exactly as if they were in a real application.</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Fix</div>
                  <div>If a problem is found in an application, the issue can be re-created here, fixed and the updated component will be available to everybody.</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs4>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Fix</div>
                  <div>If a problem is found in an application, the issue can be re-created here, fixed and the updated component will be available to everybody.</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </crm-element-page>
</template>


<script lang='ts' src='./HomePage.ts'>
</script>
