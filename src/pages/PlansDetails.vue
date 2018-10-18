<template>
<div class="wrapper  plan-container">
<div class="container">
    <div class="row">
        <div class="col-md-8 mr-auto ml-auto">
            <h1 class="title text-center">
                Plan Details
            </h1>
        </div>
    </div>
    <hr>
    <div class="row">
        <el-table class="table-striped text-center plan-details-table" height = 800 :data="tableData">
        <el-table-column class="plan-details-column" header-align = "center" prop="serviceTitle" label="Service" style="
  word-break= 'break-all'"></el-table-column>
        <el-table-column class="plan-details-column" header-align = "center" prop="basicDescription" label="BASIC">
            <template slot-scope="scope">
                <i class="now-ui-icons ui-1_check text-success" v-if = "basicSupport(scope.row)"></i>
                <div class="plan-details">{{scope.row.basicDescription[1]}}</div>
            </template>
        </el-table-column>
        <el-table-column class="plan-details-column" header-align = "center" prop="professionalDescription" label="PROFESSIONAL">
            <template slot-scope="scope" >
                <i class="now-ui-icons ui-1_check text-success" v-if = "professionalSupport(scope.row)"></i>
                <div class="plan-details">{{scope.row.professionalDescription[1]}}</div>
            </template>
        </el-table-column>
        <el-table-column class="plan-details-column" header-align = "center" prop="enterpriceDescription" label="ENTERPRISE">
            <template slot-scope="scope" >
                <i class="now-ui-icons ui-1_check text-success" v-if = "enterpriseSupport(scope.row)"></i>
                <div class="plan-details">{{scope.row.enterpriceDescription[1]}}</div>
            </template>
        </el-table-column>    
    </el-table>
    </div>
    <div class="section-space"></div>
    <div class="row">
        <div class="col-md-10 mr-auto ml-auto">
            <h2 class="title text-center">
                <em>
                    *Pricing based on a minimum term of 12 months.<br/><br/>
                    **Free Phone Rental on 3 or 5 Year Contracts with the Essentials, Professional, and Enterprise packages.<br/><br/>
                    ***Volume pricing and incentives are available!
                </em>
            </h2>
        </div>
    </div>
    <div class="section-space"></div>
        <div class="row">
            <div class=" ml-auto mr-auto">
                <router-link to="/quote">
                  <h3>
                    <n-button type = "link" class = "bg-info text-white" round>
                      <u>GET YOUR INSTANT QUOTE</u>
                    </n-button>
                  </h3>
                </router-link>
            </div>
        </div>
</div>
</div>
</template>
<style scoped>
.plan-details-table {
  font-size: 16px;
}

.btn-info u {
  font-size: 15px;
}
</style>
<style>
.el-table .cell {
  word-break: normal;
}
</style>

<script>
import { Table, TableColumn } from "element-ui";
import { Button } from "@/components";
export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Button.name]: Button
  },
  data() {
    return {
      tableData: [
        {
          serviceTitle: "Includes Complimentary Phone Rentals**",
          basicDescription: [true, "Free phone rental on 3 or 5 year contract"],
          professionalDescription: [
            true,
            "Free phone rental on 3 or 5 year contract."
          ],
          enterpriceDescription: [
            true,
            "Free phone rental on 3 or 5 year contract."
          ]
        },
        {
          serviceTitle: "Individual DID / Phone Number",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "First Auto-Attendant($8.00 each additional)",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Unlimited Incoming Calls",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Unlimited Canada & U.S. Long Distance",
          basicDescription: [false, "$ 0.04 / minute"],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Voicemail to Text Delivered to your Email Inbox",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Ring Group or Call Queue",
          basicDescription: [true, "Up to 10 Included"],
          professionalDescription: [true, "Up to 15 Included"],
          enterpriceDescription: [true, "Up to 20 Included"]
        },
        {
          serviceTitle: "Toll-Free Number Included",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Toll-Free Usage ($ 0.05 each additional minute)",
          basicDescription: [
            true,
            "2,500 Minutes Included Per Month ($125.00 Value) "
          ],
          professionalDescription: [
            true,
            "5,000 Minutes Included Per Month ($500.00 Value) "
          ],
          enterpriceDescription: [
            true,
            "10,000 Minutes Included Per Month ($500.00 Value)"
          ]
        },
        {
          serviceTitle: "Versature Conference Pod",
          basicDescription: [false, ""],
          professionalDescription: [
            true,
            "Up to 5 participants / call upgrade available"
          ],
          enterpriceDescription: [
            true,
            "Up to 5 participants / call upgrade available"
          ]
        },
        {
          serviceTitle: "iOS & Android Mobile App",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Salesforce Integration",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Klipfolio Integration",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Slack Integration",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Social Caller ID",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Click to Dial with Google Chrome",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Click to Dial with Office 365",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Unlimited, Fully Bilingual, Canadian Based Support",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Sonar User & Administration Portal",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Call Logs",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Call Reporting",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Traditional Conference Bridge",
          basicDescription: [false, "$5 / month"],
          professionalDescription: [true, ""],
          enterpriceDescription: [true, ""]
        },
        {
          serviceTitle: "Traditional Conference Usage",
          basicDescription: [false, "$0.02 / minute"],
          professionalDescription: [false, "$0.02 / minute"],
          enterpriceDescription: [false, "$0.02 / minute"]
        },
        {
          serviceTitle: "Call Recording",
          basicDescription: [false, "$10.00 / month, per user"],
          professionalDescription: [false, "$10.00 / month, per user"],
          enterpriceDescription: [false, "$10.00 / month, per user"]
        },
        {
          serviceTitle: "Custom Logo on Phones",
          basicDescription: [false, "N / A"],
          professionalDescription: [false, "N / A"],
          enterpriceDescription: [false, "Fee Applies"]
        },
        {
          serviceTitle: "Fax-to-Email",
          basicDescription: [false, "$13.00 / month"],
          professionalDescription: [false, "$13.00 / month"],
          enterpriceDescription: [false, "$13.00 / month"]
        },
        {
          serviceTitle: "Toll-Free Fax-to-Email",
          basicDescription: [false, "$18.00 / month"],
          professionalDescription: [false, "$18.00 / month"],
          enterpriceDescription: [false, "$18.00 / month"]
        },
        {
          serviceTitle: "Fax-Over-IP",
          basicDescription: [false, "$29.00 / month"],
          professionalDescription: [false, "$29.00 / month"],
          enterpriceDescription: [false, "$29.00 / month"]
        },
        {
          serviceTitle: "Local Number Port",
          basicDescription: [false, "$60.00 / month"],
          professionalDescription: [false, "$60.00 / month"],
          enterpriceDescription: [false, "$60.00 / month"]
        },
        {
          serviceTitle: "Additional DIDs / Phone Numbers",
          basicDescription: [false, "$5.00 / month"],
          professionalDescription: [false, "$5.00 / month"],
          enterpriceDescription: [false, "$5.00 / month"]
        }
      ]
    };
  },
  methods: {
    basicSupport(row) {
      return row.basicDescription[0];
    },
    professionalSupport(row) {
      return row.professionalDescription[0];
    },
    enterpriseSupport(row) {
      return row.enterpriceDescription[0];
    }
  }
};
</script>
