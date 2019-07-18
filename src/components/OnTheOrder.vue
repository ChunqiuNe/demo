<template>
  <div>
    <el-table :data='tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)'  @row-click="handdle"  highlight-current-row style='width: 100%'>
      <el-table-column
        prop='birthday'
        label='日期'
        width='180'
        fixed = 'left'
        align="center">
      </el-table-column>
      <el-table-column
        prop='id'
        label='姓名'
        width='180'
        fixed = 'left'
        align="center">
      </el-table-column>
      <el-table-column
        prop='create_time'
        label='创建时间'
        width='180'
        align="center">
      </el-table-column>
      <el-table-column
        prop='realname'
        label='身份'
        width='180'
        align="center">
      </el-table-column>
      <el-table-column
        prop='sex'
        label='性别'
        width='180'
        align="center">
      </el-table-column>
      <el-table-column
        prop='update_man'
        label='权限'
        width='180'
        align="center">
      </el-table-column><el-table-column
      prop='update_time'
      label='修改时间'   width='180'
      align="center">
    </el-table-column><el-table-column
      prop='org_id'
      label='org_id'   width='180'
      align="center">
    </el-table-column><el-table-column
      prop='stop_key'
      label='站点代码'   width='180'
      align="center">
    </el-table-column><el-table-column
      prop='id'
      label='id'   width='180'
      align="center">
    </el-table-column><el-table-column
      prop='address'
      label='地址'   width='180'
      align="center">
    </el-table-column><el-table-column
      prop='address'
      label='地址'   width='180'
      align="center">
    </el-table-column><el-table-column
      prop='address'
      label='地址'   width='180'
      align="center">
    </el-table-column><el-table-column
      prop='address'
      label='地址'   width='180'
      align="center">
    </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class='block' style='margin-top:15px;'>
      <el-pagination align='center' @size-change='handleSizeChange' @current-change='handleCurrentChange'
                     :current-page='currentPage' :page-sizes='[5]' :page-size='pageSize'
                     layout='total, sizes, prev, pager, next, jumper' :total='tableData.length'>
      </el-pagination>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5 // 每页的数据条数
    }
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
      debugger
      alert(1)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.currentRow = val
    },
    // 弹出点击行

    handdle(row, event, column) {
      let adc = this
      debugger
      this.axios.get('/api/hello', this.qs.stringify(), {
        headers: {
          'content-type': 'Access-Control-Allow-Origin:*'
        }
      }).then(function (res) {
        debugger
        // 测试
        // alert(res.data.data.content[0].userName)
        adc.$message({
          message: '请求成功',
          type: 'success'
        })
      }).catch(
        function () {
          adc.$message.error('请求失败~！')
        })
    }
  },
  // 请求后台数据时使用
  mounted () {
    let adc = this
    adc.axios.get('/api/hello', this.qs.stringify(), {
      headers: {
        'content-type': 'Access-Control-Allow-Origin:*'
      }
    }).then(function (res) {
      debugger
      // 测试
      // alert(res.data.data.content[0].userName)
      adc.tableData = res.data
      adc.$message({
        message: '请求成功',
        type: 'success'
      })
    }).catch(
      function () {
        adc.$message.error('请求失败~！')
      })
  }

}
</script>
