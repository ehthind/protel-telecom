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
        <!-- first column, service description-->
        <el-table-column class="plan-details-column" header-align = "center" prop="serviceTitle" label="Service">
          <template class="" slot-scope="scope">
            <div class = "serviceTitiel" v-html = "scope.row.serviceTitle"></div>
          </template>
        </el-table-column>

        <!-- second column, basic plan offers description -->
        <el-table-column class="plan-details-column" header-align = "center" prop="basicDescription" label="BASIC">
            <template slot-scope="scope">
                <i class="now-ui-icons ui-1_check text-success" v-if = "basicSupport(scope.row)"></i>
                <div class="plan-details" v-html="scope.row.basicDescription[1]"></div>
            </template>
        </el-table-column>

        <!-- third column, professional plan offers description -->
        <el-table-column class="plan-details-column" header-align = "center" prop="professionalDescription" label="PROFESSIONAL">
            <template slot-scope="scope" >
                <i class="now-ui-icons ui-1_check text-success" v-if = "professionalSupport(scope.row)"></i>
                <div class="plan-details" v-html="scope.row.professionalDescription[1]"></div>
            </template>
        </el-table-column>

        <!-- fourth column, enterprise offers description -->
        <el-table-column class="plan-details-column" header-align = "center" prop="enterpriseDescription" label="ENTERPRISE">
            <template slot-scope="scope" >
                <i class="now-ui-icons ui-1_check text-success" v-if = "enterpriseSupport(scope.row)"></i>
                <div class="plan-details" v-html="scope.row.enterpriseDescription[1]"></div>
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
        // service description is a array with 2 values,
        // first one is boolean, indicating whether a service is support or not
        // second one is a string about the details of a service that the plan could offer
        {
          serviceTitle: "Includes Complimentary Phone Rentals**",
          basicDescription: [true, "Free phone rental on 3 or 5 year contract"],
          professionalDescription: [
            true,
            "Free phone rental on 3 or 5 year contract."
          ],
          enterpriseDescription: [
            true,
            "Free phone rental on 3 or 5 year contract."
          ]
        },
        {
          serviceTitle: "Individual DID / Phone Number",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "First Auto-Attendant($8.00 each additional)",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Unlimited Incoming Calls",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Unlimited Local Calls",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Unlimited Canada & U.S. Long Distance",
          basicDescription: [false, "4 &cent; / minute"],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Voicemail to Text Delivered to your Email Inbox",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Ring Group or Call Queue",
          basicDescription: [true, "Up to 10 Included"],
          professionalDescription: [true, "Up to 15 Included"],
          enterpriseDescription: [true, "Up to 20 Included"]
        },
        {
          serviceTitle: "Toll-Free Number Included",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Toll-Free Usage (5&cent; each additional minute)",
          basicDescription: [
            true,
            "2,500 minutes included per month ($125.00 Value) "
          ],
          professionalDescription: [
            true,
            "5,000 minutes included per month ($250.00 Value) "
          ],
          enterpriseDescription: [
            true,
            "10,000 minutes included per month ($500.00 Value)"
          ]
        },
        {
          serviceTitle: "Versature Conference Pod",
          basicDescription: [false, ""],
          professionalDescription: [
            true,
            "Up to 5 participants / call upgrades available"
          ],
          enterpriseDescription: [
            true,
            "Up to 5 participants / call upgrades available"
          ]
        },
        {
          serviceTitle: "iOS & Android Mobile App",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Salesforce Integration",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Klipfolio Integration",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Slack Integration",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Social Caller ID",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Click to Dial with Google Chrome",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Click to Dial with Office 365",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Unlimited, Fully Bilingual, Canadian Based Support",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Sonar User & Administration Portal",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Call Logs",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Call Reporting",
          basicDescription: [true, ""],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Traditional Conference Bridge",
          basicDescription: [false, "$5 / month"],
          professionalDescription: [true, ""],
          enterpriseDescription: [true, ""]
        },
        {
          serviceTitle: "Traditional Conference Usage",
          basicDescription: [false, "2&cent; minute"],
          professionalDescription: [false, "2&cent; / minute"],
          enterpriseDescription: [false, "2&cent; / minute"]
        },
        {
          serviceTitle: "Call Recording",
          basicDescription: [false, "$10.00 / month, per user"],
          professionalDescription: [false, "$10.00 / month, per user"],
          enterpriseDescription: [false, "$10.00 / month, per user"]
        },
        {
          serviceTitle: "PC or Mac VoIP Phone Client",
          basicDescription: [false, "$3.00 per month, per user"],
          professionalDescription: [false, "$3.00 per month, per user"],
          enterpriseDescription: [false, "$3.00 per month, per user"]
        },
        {
          serviceTitle: "Custom Logo on Phones",
          basicDescription: [false, "N / A"],
          professionalDescription: [false, "N / A"],
          enterpriseDescription: [false, "Fee Applies"]
        },
        {
          serviceTitle: "Fax-to-Email",
          basicDescription: [false, "$13.00 / month"],
          professionalDescription: [false, "$13.00 / month"],
          enterpriseDescription: [false, "$13.00 / month"]
        },
        {
          serviceTitle: "Toll-Free Fax-to-Email",
          basicDescription: [false, "$18.00 / month"],
          professionalDescription: [false, "$18.00 / month"],
          enterpriseDescription: [false, "$18.00 / month"]
        },
        {
          serviceTitle: "Fax-Over-IP",
          basicDescription: [false, "$29.00 / month"],
          professionalDescription: [false, "$29.00 / month"],
          enterpriseDescription: [false, "$29.00 / month"]
        },
        {
          serviceTitle: "Local Number Port",
          basicDescription: [false, "$60.00 / month"],
          professionalDescription: [false, "$60.00 / month"],
          enterpriseDescription: [false, "$60.00 / month"]
        },
        {
          serviceTitle: "Additional DIDs / Phone Numbers",
          basicDescription: [false, "$5.00 / month"],
          professionalDescription: [false, "$5.00 / month"],
          enterpriseDescription: [false, "$5.00 / month"]
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
      return row.enterpriseDescription[0];
    }
  }
};
</script>
