<template>
    <div>
        <h1>Time Entry</h1>
        <div class="row col-1 offset-11">
            <button @click='show' class="button">ADD ENTRY</button>
        </div>
        <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
        <modal name="time-entry" width="800px" height="600px" classes="v--modal enter-time">
            <h1>Enter Time</h1>
            <form action="/enter-time">
                <div class="row">
                    <label for="date">Date: </label>
                </div>
                <div class="row">
                    <input type="date" name="date" id="entry-date">
                </div>
                <div class="row">
                    <label for="category">Category: </label>
                </div>
                <div class="row">
                    <select name="category" id="entry-category">
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
                    <textarea name="description" id="entry-description" cols="30" rows="10" placeholder="Enter a short description of your work..."></textarea>
                </div>
                <div class="row">
                    <div class="col-1">
                        <label for="hours">Hours: </label>
                        <input type="number" name="hours" id="entry-hours" min="0" max="24" value="0">
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 offset-10">
                        <input class="button" type="submit" value="SUBMIT">
                    </div>
                </div>
            </form>
        </modal>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    data: function() {
        return {
            columns: ['Date', 'Category', 'Description', 'Hours'],
            tableData: [
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
                { Date: '01/01/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 6 },
                { Date: '01/02/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 4 },
                { Date: '01/03/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 2 },
                { Date: '01/04/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 1 },
                { Date: '01/05/2019', Category: 'Personal Development', Description: 'Developing an app while work is slow', Hours: 8 },
            ],
            options: {
                filterable: true,
            }
        }
    },
    methods: {
        show() {
            this.$modal.show("time-entry");
        },
        hide() {
            this.$modal.hide("time-entry");
        }
    }
}
</script>
