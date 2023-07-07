import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/public/Home";
import JobsGrid from "./pages/public/JobsGrid";
// import JobDetail from "./pages/public/JobDetail";
import CommonLogin from "./pages/public/CommonLogin";
import EmployerListPage from "./pages/auth/employer/EmployerListPage";
import Packages from "./pages/public/Packages";
import PageNotFound from "./pages/public/PageNotFound";
import EmployerSignup from "./pages/auth/employer/EmployerSignup";
import EmployerSignupOtp from "./pages/auth/employer/EmployerSignupOtp";
import EmployerLogin from "./pages/auth/employer/EmployerLogin";
import EmployerCreateProfile from "./pages/auth/employer/EmployerCreateProfile";
import EmployerResetPassword from "./pages/auth/employer/EmployerResetPassword";
import EmployerEnterOTP from "./pages/auth/employer/EmployerEnterOTP";
import EmployerForgotPassword from "./pages/auth/employer/EmployerForgotPassword";
import ScrollToTop from "./hooks/ScrollToTop";
import EmployerDetailPage from "./pages/auth/employer/EmployerDetailPage";
import CandidateGridPage from "./pages/dashboards/employer/CandidateGridPage";
import CandidateDetailPage from "./pages/dashboards/employer/CandidateDetailPage";
import AllNotifications from "./components/dashboards/employer/AllNotifications";
import CompanyProfile from "./components/dashboards/employer/CompanyProfile";
import EmployerDashboard from "./pages/dashboards/employer/index";
import PostaJob from "./components/dashboards/employer/PostaJob";
import AllCandidates from "./components/dashboards/employer/AllCandidates";
import EmailInbox from "./components/dashboards/employer/EmailInbox";
import SentEmail from "./components/dashboards/employer/SentEmail";
import ComposeEmail from "./components/dashboards/employer/ComposeEmail";
import PackageStatus from "./components/dashboards/employer/PackageStatus";
import EditProfile from "./components/dashboards/employer/EditProfile";
import ManageJobs from "./components/dashboards/employer/ManageJobs";

import BuildResume from "./pages/public/BuildResume";
import ChangePassword from "./components/dashboards/employer/ChangePassword";
import AllPackages from "./components/dashboards/employer/AllPackages";
import AllMessages from "./components/dashboards/employer/AllMessages";
// import SupportMail from "./components/dashboards/employer/SupportComposeEmployer";
import SupportChat from "./components/dashboards/employer/SupportChat";
import JobEdit from "./components/dashboards/employer/JobEdit";
import AllApplicants from "./components/dashboards/employer/AllApplicants";
import ResumeDetailPage from "./pages/public/ResumeDetailPage";
import CandidateResume from "./pages/public/CandidateResume";
import CandidateSignup from "./pages/auth/candidate/CandidateSignup";
import CandidateSignupOTP from "./pages/auth/candidate/CandidateSignupOTP";
import CoachSignup from "./pages/auth/coach/CoachSignup";
import ResumeSlider from "./pages/public/ResumeSlider";
import CandidateDashboard from "./pages/dashboards/candidate/index";
import MyProfile from "./components/dashboards/candidate/MyProfile";
import AppliedJobs from "./components/dashboards/candidate/AppliedJobs";
import Status from "./components/dashboards/candidate/Status";
import SkillAssessmentTestDetail from "./components/dashboards/candidate/SkillAssessmentTestDetail";
import RetakeAssessmentTest from "./components/dashboards/candidate/RetakeAssessmentTest";
// import CandidateCreateProfile from "./pages/auth/candidate/CandidateCreateProfile";
import Feedback from "./components/dashboards/candidate/Feedback";
import EditProfileCandidate from "./components/dashboards/candidate/EditProfileCandidate";
import AssessmentCertificate from "./components/dashboards/candidate/AssessmentCertificate";
import FeedbackForm from "./components/dashboards/candidate/FeedbackForm";
import EmailInboxCandidate from "./components/dashboards/candidate/EmailInboxCandidate";
import SentEmailCandidate from "./components/dashboards/candidate/SentEmailCandidate";
import SupportChatCandidate from "./components/dashboards/candidate/SupportChatCandidate";
// import SupportMailCandidate from "./components/dashboards/candidate/SupportMailCandidate";
import AllRequestTraining from "./components/dashboards/candidate/AllRequestTraining";
import AllTraining from "./components/dashboards/candidate/AllTraining";
import CoachListPage from "./pages/auth/coach/CoachListPage";
import RequestForTraining from "./components/dashboards/candidate/RequestForTraining";
import AcceptedRequest from "./components/dashboards/candidate/AcceptedRequest";
import CoachDetailsPage from "./pages/auth/coach/CoachDetailsPage";

import CandidateMessages from "./components/dashboards/candidate/CandidateMessages";
import CompanyList from "./pages/public/CompanyList";
import CoachList from "./pages/public/CoachList";
import AllServices from "./components/dashboards/candidate/AllServices";
import ServiceDetail from "./components/dashboards/candidate/ServiceDetail";
import RecentServices from "./components/dashboards/candidate/RecentServices";
import AnswerQueryForm from "./components/dashboards/candidate/AnswerQueryForm";
import AllTrainingHistory from "./components/dashboards/candidate/AllTrainingHistory";
import TrashEmailCandidate from "./components/dashboards/candidate/TrashEmailCandidate";
import OrderHistory from "./components/dashboards/candidate/OrderHistory";
import QueryForm from "./components/dashboards/candidate/QueryForm";
import TrashEmail from "./components/dashboards/employer/TrashEmail";
import Blog from "./pages/public/Blog";
import Testimonial from "./pages/public/Testimonial";
// import BrowseCandidate from "./components/dashboards/employer/BrowseCandidate";
import FavouritesCandidates from "./components/dashboards/employer/FavouritesCandidates";
import ViewAllPackages from "./components/dashboards/employer/ViewAllPackages";
import DetailInbox from "./components/dashboards/employer/DetailInbox";
import FaqPage from "./pages/public/FaqPage";
import AssessmentPage from "./pages/public/AssessmentPage";
import AssessmentCareerPage from "./pages/public/AssessmentCareerPage";
import RetakeAssessmentPage from "./pages/public/RetakeAssessmentPage";
import ApplyForJob from "./components/dashboards/candidate/ApplyForJob";
import CandidateJobDetail from "./components/dashboards/candidate/CandidateJobDetail";
import FavoriteJobs from "./components/dashboards/candidate/FavoriteJobs";
import FavoriteCompany from "./components/dashboards/candidate/FavoriteCompany";
import RecommendedCoaches from "./components/dashboards/candidate/RecommendedCoaches";
import FavouriteCoaches from "./components/dashboards/candidate/FavouriteCoaches";
import BlogDetailPage from "./pages/public/BlogDetailPage";
import ResponseDetail from "./components/dashboards/candidate/ResponseDetail";
import UpcomingServices from "./components/dashboards/candidate/UpcomingServices";
import UpcomingDetail from "./components/dashboards/candidate/UpcomingDetail";
import PurchasedServices from "./components/dashboards/candidate/PurchasedServices";
import ComposeMailCandidate from "./components/dashboards/candidate/ComposeMailCandidate";
import DetailInboxCandidate from "./components/dashboards/candidate/DetailInboxCandidate";
import PurchaseDetail from "./components/dashboards/candidate/PurchseDetail";
import ServiceHistory from "./components/dashboards/candidate/ServicesHistory";
import CoachSignupOTP from "./pages/auth/coach/CoachSignupOTP";
import CoachCreateProfile from "./pages/auth/coach/CoachCreateProfile";
import CoachDashboard from "./pages/dashboards/coach";
import MyProfilePage from "./components/dashboards/coach/MyProfilePage";
import UpcomingServicesPage from "./components/dashboards/coach/UpcomingServicesPage";
import ServiceDetailPage from "./components/dashboards/coach/ServiceDetailPage";
import BuyPackages from "./components/dashboards/coach/BuyPackages";
import PackageStatusPage from "./components/dashboards/coach/PackageStatusPage";
import NotificationPage from "./components/dashboards/coach/NotificationPage";
import AddService from "./components/dashboards/coach/AddService";
import ServiceStatus from "./components/dashboards/coach/ServiceStatus";
import CoachMessages from "./components/dashboards/coach/CoachMessages";
import EmailInboxCoach from "./components/dashboards/coach/EmailInboxCoach";
import SentEmailCoach from "./components/dashboards/coach/SentEmailCoach";
import TrashEmailCoach from "./components/dashboards/coach/TrashEmailCoach";
import ComposeMailCoach from "./components/dashboards/coach/ComposeEmailCoach";
import DetailMailCoach from "./components/dashboards/coach/DetailMailCoach";
import RequestHistory from "./components/dashboards/coach/RequestHistory";
import SupportChatCoach from "./components/dashboards/coach/SupportChatCoach";
import DeactivateAccount from "./components/dashboards/coach/DeactivateAccount";
import ConfirmedDeactivatePage from "./components/dashboards/coach/ConfirmedDeactivatePage";
import PurchasedHistory from "./components/dashboards/coach/PurchasedHistory";
import QuestionFromCandidate from "./components/dashboards/coach/QuestionFromCandidate";
import ListQuestion from "./components/dashboards/coach/ListQuestion";
import OTPService from "./components/dashboards/coach/OTPService";
import EditService from "./components/dashboards/coach/EditService";
import CompletedAndCancellation from "./components/dashboards/coach/CompletedAndCancellation";
import AddAvailability from "./components/dashboards/coach/AddAvailability";
import ServiceDetailSection from "./components/dashboards/coach/ServiceDetailSection";
import WithdrawHistory from "./components/dashboards/coach/WithdrawHistory";
import WelcomePage from "./pages/auth/coach/WelcomePage";
// import SupportMailCoach from "./components/dashboards/coach/SupportComposeMailCoach";
import EditCoachProfile from "./components/dashboards/coach/EditCoachProfile";
import AboutUs from "./pages/public/AboutUs";
import CandidateChangePassword from "./components/dashboards/candidate/CandidateChangePassword";
import CandidateNotification from "./components/dashboards/candidate/CandidateNotification";
import CoachCreateEducation from "./pages/auth/coach/CoachCreateEducation";
import CoachCreateExperience from "./pages/auth/coach/CoachCreateExperience";
import PreviewJob from "./components/dashboards/employer/PreviewJob";
import EducationEdit from "./components/dashboards/candidate/EducationEdit";
import WorkExpericeEdit from "./components/dashboards/candidate/WorkExpericeEdit";
import ChangePasswordPage from "./components/dashboards/coach/ChangePasswordPage";
import ViewAvailability from "./components/dashboards/coach/ViewAvailability";
import QuestionResponse from "./components/dashboards/coach/QuestionResponse";
import ViewQuestionResponse from "./components/dashboards/coach/ViewQuestionResponse";
import General from "./components/auth/candidate/candidateProfile/General";
import Education from "./components/auth/candidate/candidateProfile/Education";
import Experience from "./components/auth/candidate/candidateProfile/Experience";
import EditProfileEducation from "./components/dashboards/coach/EditProfileEducation";
import EditProfileExperience from "./components/dashboards/coach/EditProfileExperience";
import SupportComposeMailCoach from "./components/dashboards/coach/SupportComposeMailCoach";
import SupportInboxMailCoach from "./components/dashboards/coach/SupportInboxMailCoach";
import SupportSentMailCoach from "./components/dashboards/coach/SupportSentMailCoach";
import SupportReplyMailCoach from "./components/dashboards/coach/SupportReplyMailCoach";
import SupportSentEmployer from "./components/dashboards/employer/SupportSentEmployer";
import SupportComposeEmployer from "./components/dashboards/employer/SupportComposeEmployer";
import SupportInboxEmployer from "./components/dashboards/employer/SupportInboxEmployer";
import SupportReplyEmployer from "./components/dashboards/employer/SupportReplyEmployer";
import DeleteAccount from "./components/dashboards/employer/DeleteAccount";
import DeactivateAccountEmployer from "./components/dashboards/employer/DeactivateAccountEmployer";
import ActivateAccountEmployer from "./components/dashboards/employer/ActivateAccountEmployer";
import DeleteCoachProfile from "./components/dashboards/coach/DeleteCoachProfile";
import ActivateAccount from "./components/dashboards/coach/ActivateAccount";
import TemplateOne from "./pages/public/TemplateOne";
import SupportComposeCandidate from "./components/dashboards/candidate/SupportComposeCandidate";
import SupportSentCandidate from "./components/dashboards/candidate/SupportSentCandidate";
import SupportReplyCandidate from "./components/dashboards/candidate/SupportReplyCandidate";
import SupportCandidateInbox from "./components/dashboards/candidate/SupportCandidateInbox";
import SlotBooking from "./components/dashboards/candidate/SlotBooking";
import ActivateAccountCandidate from "./components/dashboards/candidate/ActivateAccountCandidate";
import DeactivateAccountCandidate from "./components/dashboards/candidate/DeactivateAccountCandidate";
import ArticleNewsDetail from "./pages/public/ArticleNewsDetail";
import AssessmentTest from "./components/common/AssessmentTest";
// import TemplateOne from "./pages/public/TemplateOne";
import TemplateTwo from "./pages/public/TemplateTwo";
import TemplateThree from "./pages/public/TemplateThree";
import TemplateFour from "./pages/public/TemplateFour";
import TrendingNowDetail from "./pages/public/TrendingNowDetail";
import TermsAndConditions from "./pages/public/TermsAndConditions";
import PrivacyPolicy from "./pages/public/PrivacyPolicy";
import RefundPolicy from "./pages/public/RefundPolicy";
import Disclaimer from "./pages/public/Disclaimer";
import ContactUs from "./pages/public/ContactUs";
import FormOne from "./components/resumeform/FormOne";
import FormTwo from "./components/resumeform/FormTwo";
import FormThree from "./components/resumeform/FormThree";
import FormFour from "./components/resumeform/FormFour";
import TemplateFive from "./pages/public/TemplateFive";
import TemplateSix from "./pages/public/TemplateSix";
import AskMeQuestion from "./components/dashboards/candidate/AskMeQuestion";
import FormFive from "./components/resumeform/FormFive";
import ResumeFormOne from "./pages/public/ResumeFormOne";
import JobDetail from "./pages/public/JobDetail";
import AssessmentTestPage from "./pages/public/AssessmentTestPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/job-search" element={<JobsGrid />} />
            {/* <Route path="/job-details" element={<JobDetail />} /> */}
            <Route path="/commonlogin" element={<CommonLogin />} />
            <Route path="/employer-list" element={<EmployerListPage />} />
            <Route
              path="/employer-detail/:id"
              element={<EmployerDetailPage />}
            />
            <Route path="/candidate-list" element={<CandidateGridPage />} />
            <Route path="/candidate-detail/:id" element={<CandidateDetailPage />} />
            <Route path="/coach-detail/:id" element={<CoachDetailsPage />} />
            <Route path="/coach-list" element={<CoachListPage />} />
            <Route path="/company-overview" element={<CompanyList />} />
            <Route path="/coach-overview" element={<CoachList />} />
            <Route path="/candidate-resume" element={<CandidateResume />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/resume-edit" element={<ResumeDetailPage />} />
            <Route path="/build-resume" element={<BuildResume />} />
            <Route path="/resume-slider" element={<ResumeSlider />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/template-one" element={<TemplateOne />} />
            <Route path="/template-two" element={<TemplateTwo />} />
            <Route path="/template-three" element={<TemplateThree />} />
            <Route path="/template-four" element={<TemplateFour />} />
            <Route path="/template-five" element={<TemplateFive />} />
            <Route path="/template-six" element={<TemplateSix />} />
            <Route path="/career-assessment" element={<AssessmentPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-detail" element={<BlogDetailPage />} />
            <Route path="/resume-edit-one" element={<ResumeFormOne />} />
            <Route path="/resume-form1" element={<FormOne />} />
            <Route path="/resume-form2" element={<FormTwo />} />
            <Route path="/resume-form3" element={<FormThree />} />
            <Route path="/resume-form4" element={<FormFour />} />
            <Route path="/resume-form5" element={<FormFive />} />
            <Route
              path="/trending-now-detail/:id"
              element={<TrendingNowDetail />}
            />
            <Route
              path="/article-news-detail"
              element={<ArticleNewsDetail />}
            />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/assessment-test" element={<AssessmentTestPage />} />
            <Route
                path="assessment-certificate"
                element={<AssessmentCertificate />}
              />
            {/* <Route path="/assessment-test" element={<AssessmentCareerPage />} /> */}
            {/* <Route path="/welcome-page" element={<WelcomePage />} /> */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/retake-assessment"
              element={<RetakeAssessmentPage />}
            />
            {/* Auth Routes */}
            <Route path="/employer-signup" element={<EmployerSignup />} />
            <Route
              path="/employer-signup-otp"
              element={<EmployerSignupOtp />}
            />
            <Route path="/login" element={<EmployerLogin />} />
            <Route
              path="/forgot-password"
              element={<EmployerForgotPassword />}
            />
            <Route path="/forgot-password-otp" element={<EmployerEnterOTP />} />
            <Route path="/reset-password" element={<EmployerResetPassword />} />
            <Route
              path="/employer-create-profile"
              element={<EmployerCreateProfile />}
            />

            {/* Candidate Login */}

            <Route path="/candidate-signup" element={<CandidateSignup />} />
            <Route
              path="/candidate-signup-otp/:email"
              element={<CandidateSignupOTP />}
            />
            <Route path="/candidate-create-profile" element={<General />} />
            <Route path="/candidate-education" element={<Education />} />
            <Route path="/candidate-workexperience" element={<Experience />} />

            {/* <Route
                path="/candidate-create-profile"
                element={<CandidateCreateProfile />}
              /> */}

            {/* Coach Dashboard*/}

            <Route path="/coach-verify" element={<WelcomePage />} />
            <Route path="/coach-signup" element={<CoachSignup />} />
            <Route path="/coach-signup-otp" element={<CoachSignupOTP />} />
            {/* <Route
              path="/coach-create-profile"
              element={<CoachCreateProfile />}
            /> */}
            <Route
              path="/coach-create-profile/general"
              element={<CoachCreateProfile />}
            />
            <Route
              path="/coach-create-profile/education"
              element={<CoachCreateEducation />}
            />
            <Route
              path="/coach-create-profile/experience"
              element={<CoachCreateExperience />}
            />
            {/* Employer Dashboard */}
            <Route path="/employer" element={<EmployerDashboard />}>
              <Route
                path="/employer"
                element={<Navigate to="/employer/my-profile" replace />}
              />
              {/* <Route path="*" element={<CompanyProfile />} /> */}
              <Route path="my-profile" element={<CompanyProfile />} />
              <Route path="post-jobs" element={<PostaJob />} />
              <Route path="preview-job/:id" element={<PreviewJob />} />
              <Route path="job-edit/:id" element={<JobEdit />} />
              <Route path="manage-jobs" element={<ManageJobs />} />
              <Route path="buy-packages" element={<AllPackages />} />
              <Route path="all-applicants" element={<AllApplicants />} />

              <Route
                path="favourites-candidate"
                element={<FavouritesCandidates />}
              />
              {/* <Route path="buy-packages" element={<EmployerDashboard />} /> */}
              <Route path="package-status" element={<PackageStatus />} />
              <Route path="view-packages" element={<ViewAllPackages />} />
              <Route path="candidates" element={<AllCandidates />} />
              <Route path="notifications" element={<AllNotifications />} />
              <Route path="messages" element={<AllMessages />} />
              <Route path="email-inbox" element={<EmailInbox />} />
              <Route path="detail-mail" element={<DetailInbox />} />
              <Route path="email-sent" element={<SentEmail />} />
              <Route path="compose-email" element={<ComposeEmail />} />
              <Route path="trash-email" element={<TrashEmail />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="edit-profile" element={<EditProfile />} />

              {/* <Route
                path="edit-create-profile"
                element={<EditCreateProfile />}
              /> */}
              <Route path="support-chat" element={<SupportChat />} />
              <Route
                path="support-inbox-mail"
                element={<SupportInboxEmployer />}
              />
              <Route
                path="support-reply-mail"
                element={<SupportReplyEmployer />}
              />
              <Route
                path="support-sent-mail"
                element={<SupportSentEmployer />}
              />
              <Route
                path="support-compose-mail"
                element={<SupportComposeEmployer />}
              />
              <Route
                path="deactivate-employer-account"
                element={<DeactivateAccountEmployer />}
              />
              <Route
                path="activate-employer-account"
                element={<ActivateAccountEmployer />}
              />
              <Route path="delete-account" element={<DeleteAccount />} />
            </Route>

            {/* Candidate */}
            <Route path="job-details/:jobid" element={<JobDetail />} />

            <Route path="/candidate" element={<CandidateDashboard />}>
              <Route
                path="/candidate"
                element={<Navigate to="/candidate/my-profile" replace />}
              />
              <Route path="Education-Edit/:id" element={<EducationEdit />} />
              <Route
                path="WorkExperice-Edit/:id"
                element={<WorkExpericeEdit />}
              />
              <Route path="my-profile" element={<MyProfile />} />
              <Route path="applied-jobs" element={<AppliedJobs />} />
              <Route path="apply-for-job" element={<ApplyForJob />} />
              <Route path="favorite-job" element={<FavoriteJobs />} />
              <Route path="favorite-company" element={<FavoriteCompany />} />
              <Route path="status" element={<Status />} />
              <Route path="all-services" element={<AllServices />} />
              <Route path="all-responses" element={<ResponseDetail />} />
              <Route path="service-detail" element={<ServiceDetail />} />
              <Route path="slot-booking" element={<SlotBooking />} />
              <Route path="ask-me-question" element={<AskMeQuestion />} />
              <Route path="service-history" element={<ServiceHistory />} />
              <Route
                path="purchased-services"
                element={<PurchasedServices />}
              />
              <Route path="purchase-detail/:id" element={<PurchaseDetail />} />
              <Route path="upcoming-services" element={<UpcomingServices />} />
              <Route
                path="upcoming-detail-service/:candidateId/:serviceId"
                element={<UpcomingDetail />}
              />
              <Route path="recent-services" element={<RecentServices />} />
              <Route path="answered-query" element={<AnswerQueryForm />} />
              <Route path="query-form" element={<QueryForm />} />
              <Route path="order-history" element={<OrderHistory />} />
              <Route
                path="assessment-detail"
                element={<SkillAssessmentTestDetail />}
              />
              <Route path="retake-test" element={<RetakeAssessmentTest />} />
              <Route
                path="candidate-notification"
                element={<CandidateNotification />}
              />

              <Route path="training-history" element={<AllTraining />} />
            
              <Route path="feedback" element={<Feedback />} />

              <Route
                path="recommended-coaches"
                element={<RecommendedCoaches />}
              />
              <Route path="favorite-coaches" element={<FavouriteCoaches />} />
              <Route
                path="edit-candidate-profile/:id"
                element={<EditProfileCandidate />}
              />
              <Route path="request-training" element={<RequestForTraining />} />
              <Route
                path="request-training-history"
                element={<AllTrainingHistory />}
              />
              <Route path="accepted-request" element={<AcceptedRequest />} />
              <Route
                path="assessment-certificate"
                element={<AssessmentCertificate />}
              />
              <Route path="all-request" element={<AllRequestTraining />} />
              <Route path="feedback-form" element={<FeedbackForm />} />
              <Route path="email-inbox" element={<EmailInboxCandidate />} />
              <Route path="trash-email" element={<TrashEmailCandidate />} />
              <Route
                path="candidate-messages"
                element={<CandidateMessages />}
              />
              <Route path="compose-email" element={<ComposeMailCandidate />} />
              <Route
                path="detail-mail/:id"
                element={<DetailInboxCandidate />}
              />
              <Route path="email-sent" element={<SentEmailCandidate />} />
              <Route path="support-chat" element={<SupportChatCandidate />} />
              {/* <Route path="support-mail" element={<SupportMailCandidate />} /> */}
              <Route
                path="support-compose-mail"
                element={<SupportComposeCandidate />}
              />
              <Route
                path="support-sent-mail"
                element={<SupportSentCandidate />}
              />
              <Route
                path="support-reply-mail"
                element={<SupportReplyCandidate />}
              />
              <Route
                path="support-inbox-mail"
                element={<SupportCandidateInbox />}
              />
              <Route
                path="change-password"
                element={<CandidateChangePassword />}
              />
              <Route
                path="activate-candidate-account"
                element={<ActivateAccountCandidate />}
              />
              <Route path="delete-account" element={<DeleteAccount />} />
              <Route
                path="deactivate-candidate-account"
                element={<DeactivateAccountCandidate />}
              />
            </Route>

            {/* Coach */}
            <Route path="/coach" element={<CoachDashboard />}>
              <Route
                path="/coach"
                element={<Navigate to="/coach/my-profile" />}
                replace
              />
              <Route path="my-profile" element={<MyProfilePage />} />
              <Route
                path="edit-coach-profile/general"
                element={<EditCoachProfile />}
              />
              <Route
                path="edit-coach-profile/education"
                element={<EditProfileEducation />}
              />
              <Route
                path="edit-coach-profile/experience"
                element={<EditProfileExperience />}
              />
              <Route
                path="upcoming-services"
                element={<UpcomingServicesPage />}
              />
              <Route path="service-detail" element={<ServiceDetailPage />} />
              <Route path="buy-packages" element={<BuyPackages />} />
              <Route path="add-services" element={<AddService />} />
              <Route path="edit-service/:id" element={<EditService />} />
              <Route path="service-status" element={<ServiceStatus />} />
              <Route
                path="service-detail-section/:id"
                element={<ServiceDetailSection />}
              />
              <Route path="package-status" element={<PackageStatusPage />} />
              <Route path="coach-messages" element={<CoachMessages />} />
              <Route path="compose-email" element={<ComposeMailCoach />} />
              <Route path="email-inbox" element={<EmailInboxCoach />} />
              <Route path="email-sent" element={<SentEmailCoach />} />
              <Route path="trash-email" element={<TrashEmailCoach />} />
              <Route path="detail-email" element={<DetailMailCoach />} />
              <Route
                path="candidate-question"
                element={<QuestionFromCandidate />}
              />
              <Route
                path="candidate-question-response"
                element={<QuestionResponse />}
              />
              <Route
                path="candidate-question-view"
                element={<ViewQuestionResponse />}
              />
              <Route path="withdraw-history" element={<WithdrawHistory />} />
              <Route path="request-history" element={<RequestHistory />} />
              <Route path="notifications" element={<NotificationPage />} />
              <Route path="purchase-history" element={<PurchasedHistory />} />
              <Route path="change-password" element={<ChangePasswordPage />} />
              <Route path="support-chat" element={<SupportChatCoach />} />
              <Route path="list-questions" element={<ListQuestion />} />
              <Route path="add-availability" element={<AddAvailability />} />
              <Route path="view-availability" element={<ViewAvailability />} />
              <Route path="otp-service" element={<OTPService />} />
              <Route
                path="support-compose-mail"
                element={<SupportComposeMailCoach />}
              />
              <Route
                path="support-inbox-mail"
                element={<SupportInboxMailCoach />}
              />
              <Route
                path="support-sent-mail"
                element={<SupportSentMailCoach />}
              />
              <Route
                path="support-reply-mail"
                element={<SupportReplyMailCoach />}
              />
              <Route
                path="completed-cancellation-services"
                element={<CompletedAndCancellation />}
              />
              <Route
                path="deactivate-account"
                element={<DeactivateAccount />}
              />
              <Route path="activate-account" element={<ActivateAccount />} />
              <Route
                path="confirmed-deactivate-account"
                element={<ConfirmedDeactivatePage />}
              />
              <Route
                path="delete-coach-account"
                element={<DeleteCoachProfile />}
              />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
