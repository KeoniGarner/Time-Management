<template>
    <div>
        <h1>Time Entry</h1>
        <div class="row col-1 offset-11">
            <button @click='show' class="button">ADD ENTRY</button>
        </div>
        <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
        <modal name="time-entry" width="800px" height="600px" classes="v--modal enter-time">
            <h1>Enter Time</h1>
            <form @submit.prevent="addEntry">
                <div class="row">
                    <label for="date">Date: </label>
                </div>
                <div class="row">
                    <input type="date" name="date" v-model="date" id="entry-date">
                </div>
                <div class="row">
                    <label for="category">Category: </label>
                </div>
                <div class="row">
                    <select name="category" v-model="category" id="entry-category">
                        <option value="work">Work</option>
                        <option value="meetings">Meetings</option>
                        <option value="personal-development">Personal Development</option>
                        <option value="travel">Travel</option>
                        <option value="vacation">Vacation/Time-Off</option>
                    </select>
                </div>
                <div class="row">
                    <label for="description">Description: </label>
                </div>
                <div class="row">
                    <textarea name="description" v-model="description" id="entry-description" cols="30" rows="10" placeholder="Enter a short description of your work..."></textarea>
                </div>
                <div class="row">
                    <div class="col-1">
                        <label for="hours">Hours: </label>
                        <input type="number" name="hours" v-model="hours" id="entry-hours" min="0" max="24" value="0">
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 offset-10">
                        <input @click="hide" class="button" type="submit" value="SUBMIT">
                    </div>
                </div>
            </form>
        </modal>
    </div>
</template>

<script>
import { firebaseAuth, db } from '../config/firebase.config';
const timeEntries = db.collection('time-entries');
export default {
    data: function() {
        return {
            columns: ['date', 'category', 'description', 'hours'],
            tableData: [],
            options: {
                filterable: true,
            },
            date: new Date(),
            category: '',
            description: '',
            hours: 0,
        }
    },
    methods: {
        show() {
            this.$modal.show("time-entry");
        },
        hide() {
            this.$modal.hide("time-entry");
        },
        getTimeEntries() {
            this.tableData = [];
            return timeEntries
                    .where("userId", "==", firebaseAuth().currentUser.uid)
                    .orderBy("date", "desc")
                    .get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            this.tableData.push(doc.data());
                        });
                    })
                    .catch(error => {
                        console.log("Error getting documents: ", error);
                    });
        },
        addEntry() {
            timeEntries.add({
                date: this.date,
                category: this.category,
                description: this.description,
                hours: this.hours,
                userId: firebaseAuth().currentUser.uid
            }).then(docRef => {
                this.timeEntries = this.getTimeEntries();
            }).catch(error => {
                console.error("Error adding document: ", error);
            })
        },
        deleteEntry() {

        },
        editEntry() {

        }
    },
    mounted () {
        this.getTimeEntries()
    }
}
</script>
