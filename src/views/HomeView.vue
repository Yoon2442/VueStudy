<template>
    <div>
        <el-row>
            <el-col :span="2"> </el-col>
            <el-col :span="20">
                <el-table @row-click="rowClicked" :data="articles" style="width: 100%">
                    <!-- <el-table-column prop="id" label="id" width="80">
                  </el-table-column> -->
                    <el-table-column prop="user_id" label="user ID" width="120">
                    </el-table-column>
                    <el-table-column prop="title" label="title">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <a href="/board/write" class="write_btn">
            <img src="/images/pen_icon.png" />
        </a>
        <button v-on:click="testButtonClicked" class="btn_test">
            <img src="/images/test_icon.png" />
        </button>
    </div>
</template>

<script>
import apiBoard from "@/api/board";

export default {
    data() {
        return {
            articles: null,
        };
    },

    mounted() {
        apiBoard
            .getArticles(0)
            .then((response) => {
                // console.log("getArticles", response);
                this.articles = response.data;
            })
            .catch((e) => {
                console.log(e);
            });
    },

    methods: {
        rowClicked(row) {
            this.$router.push({
                path: `/board/detail/${row.id}`,
            });
        },
        testButtonClicked() {
            apiBoard
                .getTestItem()
                .then((response) => {
                    console.log(response);
                })
                .catch((e) => {
                    console.log(e);
                    this.$message.error("test error");
                });
        }
    },
};
</script>

<style scoped>
.write_btn {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 48px;
    height: 48px;
    border-radius: 50px;
    background: #fc1f49;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    z-index: 10;
    display: inline-block;
}

.btn_test {
    position: fixed;
    bottom: 40px;
    right: 100px;
    width: 48px;
    height: 48px;
    border-radius: 50px;
    background: #17b686;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    z-index: 10;
    /* display: inline-block; */
    display: flex;
    align-items: center;
}

.btn_test img {
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 50%;
}

.write_btn img {
    position: relative;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -55%);
}
</style>