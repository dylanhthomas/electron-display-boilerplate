import captureWebsite from 'capture-website'


const options = {
    overwrite: true,
	width: 1920,
    height: 1080,
    scaleFactor: 1,
    disableAnimations: true,
    debug: false
}

const outputPath='./screenshots/'
const localPath='file:///C:/Users/Dylan/OneDrive/Sites/az-lokelma-icva-touchscreen-temp/assets/'


let optionsVar = options


console.log()
console.log("================================================")
console.log()
console.log("               Screenshots Starting             ")
console.log()
console.log("================================================")
console.log()




// Home
optionsVar = options
optionsVar.clickElement = null
await captureWebsite.file(localPath+'Home/Home.html', outputPath+'01_home.png', optionsVar)
console.log("Generated: 01_home.png")


// Home - ISI Tray
optionsVar = options
optionsVar.clickElement = '#expand_isi'
optionsVar.delay = 2
await captureWebsite.file(localPath+'Home/Home.html', outputPath+'02_home_isi_tray.png', optionsVar)
console.log("Generated: 02_home_isi_tray.png")


// Home - Modal - Reference
optionsVar = options
optionsVar.clickElement = '#button_ref'
await captureWebsite.file(localPath+'Home/Home.html', outputPath+'03_home_modal_ref.png', optionsVar)
console.log("Generated: 03_home_modal_ref.png")

// Burden
optionsVar = options
optionsVar.clickElement = null
await captureWebsite.file(localPath+'Risk/Risk.html', outputPath+'04_burden.png', optionsVar)
console.log("Generated: 04_burden.png")

// Burden - Discontinuation Blade
optionsVar = options
optionsVar.clickElement = '#blade'
optionsVar.delay = 2
await captureWebsite.file(localPath+'Risk/Risk.html', outputPath+'05_burden_blade_discontinuation.png', optionsVar)
console.log("Generated: 05_burden_blade_discontinuation.png")

// Burden - Zora Study
optionsVar = options
optionsVar.clickElement = '#recurrent_popup1'
await captureWebsite.file(localPath+'Risk/Risk.html', outputPath+'06_burden_modal_zora_study.png', optionsVar)
console.log("Generated: 06_burden_modal_zora_study.png")

// Burden - Modal - Reference
optionsVar = options
optionsVar.clickElement = '#button_ref'
await captureWebsite.file(localPath+'Risk/Risk.html', outputPath+'07_burden_modal_ref.png', optionsVar)
console.log("Generated: 07_burden_modal_ref.png")

// RAASi
optionsVar = options
optionsVar.clickElement = null
await captureWebsite.file(localPath+'RAASi_enablement/RAASi_enablement.html', outputPath+'08_raasi.png', optionsVar)
console.log("Generated: 08_raasi.png")

// RAASi - Modal - Study 3
optionsVar = options
optionsVar.clickElement = '#recurrent_popup1'
await captureWebsite.file(localPath+'RAASi_enablement/RAASi_enablement.html', outputPath+'09_raasi_modal_study3.png', optionsVar)
console.log("Generated: 09_raasi_modal_study3.png")

// RAASi - Modal - Reference
optionsVar = options
optionsVar.clickElement = '#button_ref'
await captureWebsite.file(localPath+'RAASi_enablement/RAASi_enablement.html', outputPath+'10_raasi_modal_ref.png', optionsVar)
console.log("Generated: 10_raasi_modal_ref.png")

// Efficacy
optionsVar = options
optionsVar.clickElement = null
await captureWebsite.file(localPath+'Efficacy/Efficacy.html', outputPath+'11_efficacy.png', optionsVar)
console.log("Generated: 11_efficacy.png")

// Efficacy - Blade - Reduction
optionsVar = options
optionsVar.clickElement = '#blade'
optionsVar.delay = 2
await captureWebsite.file(localPath+'Efficacy/Efficacy.html', outputPath+'12_efficacy_blade_reduction.png', optionsVar)
console.log("Generated: 12_efficacy_blade_reduction.png")

// Efficacy - Modal - Study 1
optionsVar = options
optionsVar.clickElement = '#ss_trigger'
optionsVar.delay = 2
await captureWebsite.file(localPath+'Efficacy/Efficacy.html', outputPath+'13_efficacy_modal_study1.png', optionsVar)
console.log("Generated: 13_efficacy_modal_study1.png")

// Efficacy - Modal - Study 2
optionsVar = options
optionsVar.clickElement = '#recurrent_popup1'
optionsVar.delay = 2
await captureWebsite.file(localPath+'Efficacy/Efficacy.html', outputPath+'14_efficacy_modal_study2.png', optionsVar)
console.log("Generated: 14_efficacy_modal_study2.png")

// Efficacy - Modal - Reference
optionsVar = options
optionsVar.clickElement = '#button_ref'
await captureWebsite.file(localPath+'Efficacy/Efficacy.html', outputPath+'15_efficacy_modal_ref.png', optionsVar)
console.log("Generated: 15_efficacy_modal_ref.png")

// Patient Profile
optionsVar = options
optionsVar.clickElement = null
await captureWebsite.file(localPath+'Patient_Profile/Patient_Profile.html', outputPath+'16_patient_profile.png', optionsVar)
console.log("Generated: 16_patient_profile.png")

// Patient Profile - Modal - Reference
optionsVar = options
optionsVar.clickElement = '#button_ref'
await captureWebsite.file(localPath+'Patient_Profile/Patient_Profile.html', outputPath+'17_patient_profile_modal_ref.png', optionsVar)
console.log("Generated: 17_patient_profile_modal_ref.png")

// Safety
optionsVar = options
optionsVar.clickElement = null
await captureWebsite.file(localPath+'Safety/Safety.html', outputPath+'18_safety.png', optionsVar)
console.log("Generated: 18_safety.png")

// Safety - Modal - Table
optionsVar = options
optionsVar.clickElement = '#plus-icon'
await captureWebsite.file(localPath+'Safety/Safety.html', outputPath+'19_safety_modal_table.png', optionsVar)
console.log("Generated: 19_safety_modal_table.png")

// Safety - Modal - Reference
optionsVar = options
optionsVar.clickElement = '#button_ref'
await captureWebsite.file(localPath+'Safety/Safety.html', outputPath+'20_safety_modal_ref.png', optionsVar)
console.log("Generated: 20_safety_modal_ref.png")

// Summary
optionsVar = options
optionsVar.clickElement = null
await captureWebsite.file(localPath+'Summary/Summary.html', outputPath+'21_summary.png', optionsVar)
console.log("Generated: 21_summary.png")

// Summary - Modal - Guidelines
optionsVar = options
optionsVar.clickElement = '#button_1'
await captureWebsite.file(localPath+'Summary/Summary.html', outputPath+'22_summary_modal_guidelines.png', optionsVar)
console.log("Generated: 22_summary_modal_guidelines.png")

// Summary - Modal - Recommendations
optionsVar = options
optionsVar.clickElement = '#button_2'
await captureWebsite.file(localPath+'Summary/Summary.html', outputPath+'23_summary_modal_recommendations.png', optionsVar)
console.log("Generated: 23_summary_modal_recommendations.png")

// Summary - Modal - Reference
optionsVar = options
optionsVar.clickElement = '#button_ref'
await captureWebsite.file(localPath+'Summary/Summary.html', outputPath+'24_summary_modal_ref.png', optionsVar)
console.log("Generated: 24_summary_modal_ref.png")






console.log()
console.log("================================================")
console.log()
console.log("               Screenshots Complete             ")
console.log()
console.log("================================================")
console.log()
