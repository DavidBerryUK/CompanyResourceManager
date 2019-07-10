<template>
  <v-dialog v-model="showDialog" :content-class="dialogStyle">
    <v-card>
      <v-toolbar :color="dialogOptions.themeColor" dark>
        <v-toolbar-title>{{dialogOptions.title}}</v-toolbar-title>
      </v-toolbar>

      <div ref="containerBody"></div>
      <div ref="commonDialogBody">
        <!-- main body of the dialog -->
        <v-card-text>
          <v-layout row fluid pt-1 pb-1>
            <v-flex xs4 text-xs-center>
              <span :class="iconTextColour">
                <i :class="iconClass"></i>
              </span>
            </v-flex>
            <v-flex xs7 text-xs-center pt-1>
              <span class="display-1 font-weight-light">{{dialogOptions.message}}</span>
            </v-flex>
          </v-layout>
        </v-card-text>
      </div>

      <v-divider></v-divider>

      <!-- footer -->
      <v-layout row fluid>
        <v-flex xs6>
          <v-btn v-if="showCancelButton" color="info" @click="onCancelPressed">Cancel</v-btn>
          <v-btn v-if="showNoButton" color="info" @click="onNoPressed">No</v-btn>
        </v-flex>

        <v-flex xs6 text-xs-right>
          <v-btn v-if="showOkButton" color="ok" @click="onOkPressed">OK</v-btn>
          <v-btn v-if="showYesButton" color="ok" @click="onYesPressed">Yes</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>


<script lang="ts" src='./CommonAppDialogMasterPage.ts'></script>