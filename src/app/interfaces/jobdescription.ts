export interface HiringManagerData {
  what_you_work_on: string,
  what_you_bring: string,
  team: string,
  how_we_work: string,
  title: string,
  summary: string,
  impact_in_work: string,
}

export interface HRData {
  who_we_are: string,
  what_you_work_on: string,
  what_you_bring: string,
  team: string,
  how_we_work: string,
  what_you_get: string,
  process: string,
  benefits: string,
  legal: string,
  disclaimer: string,
  free_field: string,
  title: string,
  summary: string,
  purpose: string,
}

export interface JobDescription {
  id: string,
  location: string,
  application_deadline: string,
  employment_type: string,
  start_date: string,
  education: string,
  website: string,
  compensation: string,
  notes: string,
  key: string,

  // stages are: [ 'new', 'send_to_department', 'in_edit_by_department',
  // 'completed_by_department', 'in_edit_by_hr', 'finished' ]
  stage: string,
  hiring_manager_data: HiringManagerData,
  hr_data: HRData
}
