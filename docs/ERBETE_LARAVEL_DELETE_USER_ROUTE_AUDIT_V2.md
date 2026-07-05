# ERBETE LARAVEL DELETE USER ROUTE AUDIT V2

Generated: 06/28/2026 05:17:00

Mode: audit-only. No patch. No delete. No build. No commit.

## STORE_PANEL

- Root: C:\deploy\storepanel

- Candidate files scanned: 47

### FILE: C:\deploy\storepanel\app\Http\Controllers\AdvertisementsController.php

- Hits: 5

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class AdvertisementsController extends Controller
NEXT: {
NEXT: public function __construct()
NEXT: {
NEXT: $this->middleware('auth');

LINE: 18
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: 
NEXT: return view("advertisements.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: public function create()

LINE: 19
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: 
NEXT: return view("advertisements.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: public function create()
NEXT: {

LINE: 28
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view('advertisements.create')->with('id',$id);
NEXT: }
NEXT: public function edit($id)
NEXT: {
NEXT: return view('advertisements.edit')->with('id', $id);

LINE: 29
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view('advertisements.create')->with('id',$id);
NEXT: }
NEXT: public function edit($id)
NEXT: {
NEXT: return view('advertisements.edit')->with('id', $id);
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\AjaxController.php

- Hits: 9

LINE: 11
PREV: 
PREV: namespace App\Http\Controllers\Auth;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use App\Models\User;
NEXT: use Illuminate\Support\Facades\Hash;
NEXT: use Illuminate\Support\Facades\DB;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Illuminate\Http\Request;
NEXT: use App\Http\Controllers\Controller;

LINE: 18
PREV: use Illuminate\Support\Facades\Auth;
PREV: use Illuminate\Http\Request;
PREV: use App\Http\Controllers\Controller;
TEXT: use Illuminate\Foundation\Auth\AuthenticatesUsers;
NEXT: use Laravel\Socialite\Facades\Socialite;
NEXT: use Prettus\Validator\Exceptions\ValidatorException;
NEXT: 
NEXT: class AjaxController extends Controller
NEXT: {
NEXT: 

LINE: 29
PREV: public function setToken(Request $request){
PREV: 
PREV: $userId = $request->userId;
TEXT: $uuid = $request->id;
NEXT: $password=$request->password;
NEXT: $exist = VendorUsers::where('uuid',$uuid )->get();
NEXT: $data = $exist->isEmpty();
NEXT: if($exist->isEmpty()){
NEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $userId,

LINE: 31
PREV: $userId = $request->userId;
PREV: $uuid = $request->id;
PREV: $password=$request->password;
TEXT: $exist = VendorUsers::where('uuid',$uuid )->get();
NEXT: $data = $exist->isEmpty();
NEXT: if($exist->isEmpty()){
NEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $userId,
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,

LINE: 34
PREV: $exist = VendorUsers::where('uuid',$uuid )->get();
PREV: $data = $exist->isEmpty();
PREV: if($exist->isEmpty()){
TEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $userId,
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: 
NEXT: User::create([

LINE: 36
PREV: if($exist->isEmpty()){
PREV: DB::table('vendor_users')->insert([
PREV: 'user_id' => $userId,
TEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: 
NEXT: User::create([
NEXT: 'name' => $request->email,
NEXT: 'email' => $request->email,

LINE: 40
PREV: 'email' => $request->email,
PREV: ]);
PREV: 
TEXT: User::create([
NEXT: 'name' => $request->email,
NEXT: 'email' => $request->email,
NEXT: 'password' => Hash::make($password),
NEXT: ]);
NEXT: 
NEXT: }else{

LINE: 51
PREV: }
PREV: 
PREV: 
TEXT: $user = User::where('email',$request->email)->first();
NEXT: 
NEXT: 
NEXT: Auth::login($user,true);
NEXT: $data = array();
NEXT: if(Auth::check()){
NEXT: 

LINE: 68
PREV: public function logout(Request $request){
PREV: 
PREV: $user_id = Auth::user()->user_id;
TEXT: $user = VendorUsers::where('user_id',$user_id)->first();
NEXT: 
NEXT: try {
NEXT: Auth::logout();
NEXT: } catch (\Exception $e) {
NEXT: $this->sendError($e->getMessage(), 401);
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\ApiController.php

- Hits: 13

LINE: 7
PREV: use Illuminate\Support\Facades\Validator;
PREV: use Illuminate\Support\Facades\DB;
PREV: use Exception;
TEXT: use App\Models\VendorUsers;
NEXT: use App\Models\User;
NEXT: use Illuminate\Http\Request;
NEXT: 
NEXT: class ApiController extends Controller
NEXT: {
NEXT: public function deleteUserFromDb(Request $request) {

LINE: 13
PREV: 
PREV: class ApiController extends Controller
PREV: {
TEXT: public function deleteUserFromDb(Request $request) {
NEXT: 
NEXT: // LOCAL_SAFE_TEST_DELETE_USER_BYPASS
NEXT: // This block is only for local endpoint connectivity testing.
NEXT: // It prevents the fake UUID test from touching database/delete logic.
NEXT: if ($request->input('uuid') === '__SAFE_TEST_DO_NOT_DELETE__') {
NEXT: return response()->json([

LINE: 17
PREV: 
PREV: // LOCAL_SAFE_TEST_DELETE_USER_BYPASS
PREV: // This block is only for local endpoint connectivity testing.
TEXT: // It prevents the fake UUID test from touching database/delete logic.
NEXT: if ($request->input('uuid') === '__SAFE_TEST_DO_NOT_DELETE__') {
NEXT: return response()->json([
NEXT: 'status' => true,
NEXT: 'message' => 'SAFE_TEST_OK: endpoint reached, database bypassed for local connection test.',
NEXT: 'panel' => basename(base_path()),
NEXT: ], 200);

LINE: 18
PREV: // LOCAL_SAFE_TEST_DELETE_USER_BYPASS
PREV: // This block is only for local endpoint connectivity testing.
PREV: // It prevents the fake UUID test from touching database/delete logic.
TEXT: if ($request->input('uuid') === '__SAFE_TEST_DO_NOT_DELETE__') {
NEXT: return response()->json([
NEXT: 'status' => true,
NEXT: 'message' => 'SAFE_TEST_OK: endpoint reached, database bypassed for local connection test.',
NEXT: 'panel' => basename(base_path()),
NEXT: ], 200);
NEXT: }

LINE: 27
PREV: }
PREV: 
PREV: $validator = Validator::make($request->all(), [
TEXT: 'uuid' => 'required|exists:vendor_users,uuid',
NEXT: ]);
NEXT: 
NEXT: if ($validator->fails()) {
NEXT: return response()->json([
NEXT: 'status' => 'okay',
NEXT: 'message' => $validator->errors()->first(),

LINE: 40
PREV: DB::beginTransaction();
PREV: 
PREV: try {
TEXT: $vendorUser = VendorUsers::where('uuid', $request->uuid)->first();
NEXT: if ($vendorUser) {
NEXT: $user_id = $vendorUser->user_id;
NEXT: $user = User::find($user_id);
NEXT: if ($user) {
NEXT: $user->delete();
NEXT: } else {

LINE: 41
PREV: 
PREV: try {
PREV: $vendorUser = VendorUsers::where('uuid', $request->uuid)->first();
TEXT: if ($vendorUser) {
NEXT: $user_id = $vendorUser->user_id;
NEXT: $user = User::find($user_id);
NEXT: if ($user) {
NEXT: $user->delete();
NEXT: } else {
NEXT: return response()->json([

LINE: 42
PREV: try {
PREV: $vendorUser = VendorUsers::where('uuid', $request->uuid)->first();
PREV: if ($vendorUser) {
TEXT: $user_id = $vendorUser->user_id;
NEXT: $user = User::find($user_id);
NEXT: if ($user) {
NEXT: $user->delete();
NEXT: } else {
NEXT: return response()->json([
NEXT: 'status' => 'okay',

LINE: 43
PREV: $vendorUser = VendorUsers::where('uuid', $request->uuid)->first();
PREV: if ($vendorUser) {
PREV: $user_id = $vendorUser->user_id;
TEXT: $user = User::find($user_id);
NEXT: if ($user) {
NEXT: $user->delete();
NEXT: } else {
NEXT: return response()->json([
NEXT: 'status' => 'okay',
NEXT: 'message' => 'User not found with the provided user_id.',

LINE: 52
PREV: 'message' => 'User not found with the provided user_id.',
PREV: ], 404);
PREV: }
TEXT: $vendorUser->delete();
NEXT: } else {
NEXT: return response()->json([
NEXT: 'status' => 'okay',
NEXT: 'message' => 'No associated vendor user found with the provided UUID.',
NEXT: ], 404);
NEXT: }

LINE: 56
PREV: } else {
PREV: return response()->json([
PREV: 'status' => 'okay',
TEXT: 'message' => 'No associated vendor user found with the provided UUID.',
NEXT: ], 404);
NEXT: }
NEXT: 
NEXT: DB::commit();
NEXT: 
NEXT: return response()->json([

LINE: 60
PREV: ], 404);
PREV: }
PREV: 
TEXT: DB::commit();
NEXT: 
NEXT: return response()->json([
NEXT: 'status' => 'okay',
NEXT: 'message' => 'User and associated records deleted successfully.',
NEXT: ], 200);
NEXT: 

LINE: 68
PREV: ], 200);
PREV: 
PREV: } catch (Exception $e) {
TEXT: DB::rollBack();
NEXT: return response()->json([
NEXT: 'status' => 'error',
NEXT: 'message' => 'Failed to delete user. ' . $e->getMessage(),
NEXT: ], 500);
NEXT: }
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\BookTableController.php

- Hits: 3

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: 
NEXT: class BookTableController extends Controller

LINE: 23
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view("bookTable.index")->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {

LINE: 24
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view("bookTable.index")->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {
NEXT: return view('bookTable.edit')->with('id', $id);

### FILE: C:\deploy\storepanel\app\Http\Controllers\CouponController.php

- Hits: 5

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class CouponController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()
NEXT: {

LINE: 19
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view("coupons.index")->with('id',$id);;
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {

LINE: 20
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view("coupons.index")->with('id',$id);;
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {
NEXT: return view('coupons.edit')->with('id', $id);

LINE: 33
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view('coupons.create')->with('id',$id);
NEXT: }
NEXT: 
NEXT: }
NEXT: 

LINE: 34
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view('coupons.create')->with('id',$id);
NEXT: }
NEXT: 
NEXT: }
NEXT: 
NEXT: 

### FILE: C:\deploy\storepanel\app\Http\Controllers\DeliverymanController.php

- Hits: 5

LINE: 7
PREV: 
PREV: use Illuminate\Support\Facades\Auth;
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class DeliverymanController extends Controller
NEXT: {
NEXT: /**
NEXT: * Create a new controller instance.
NEXT: *

LINE: 26
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view("deliveryman.index")->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {

LINE: 27
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view("deliveryman.index")->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {
NEXT: return view('deliveryman.edit')->with('id', $id);

LINE: 40
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view('deliveryman.create')->with('id', $id);
NEXT: }
NEXT: }

LINE: 41
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view('deliveryman.create')->with('id', $id);
NEXT: }
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\DocumentController.php

- Hits: 5

LINE: 14
PREV: 
PREV: use Illuminate\Support\Facades\Auth;
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: class DocumentController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()
NEXT: {
NEXT: $this->middleware('auth');

LINE: 27
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view("documents.index")->with('id', $id);
NEXT: }
NEXT: public function DocumentUpload($id)
NEXT: {
NEXT: $user = Auth::user();

LINE: 28
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view("documents.index")->with('id', $id);
NEXT: }
NEXT: public function DocumentUpload($id)
NEXT: {
NEXT: $user = Auth::user();
NEXT: $userId = Auth::id();

LINE: 35
PREV: {
PREV: $user = Auth::user();
PREV: $userId = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $userId)->first();
NEXT: $vendorId = $exist->uuid;
NEXT: return view("documents.document_upload", compact('vendorId', 'id'));
NEXT: }
NEXT: }

LINE: 36
PREV: $user = Auth::user();
PREV: $userId = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $userId)->first();
TEXT: $vendorId = $exist->uuid;
NEXT: return view("documents.document_upload", compact('vendorId', 'id'));
NEXT: }
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\FoodController.php

- Hits: 5

LINE: 7
PREV: 
PREV: use Illuminate\Support\Facades\Auth;
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class FoodController extends Controller
NEXT: {
NEXT: /**
NEXT: * Create a new controller instance.
NEXT: *

LINE: 26
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: 
NEXT: return view("items.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: public function edit($id)

LINE: 27
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: 
NEXT: return view("items.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {

LINE: 41
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: 
NEXT: return view('items.create')->with('id',$id);
NEXT: }
NEXT: public function items(){
NEXT: return view('items.global')->with('id',Auth::id());

LINE: 42
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: 
NEXT: return view('items.create')->with('id',$id);
NEXT: }
NEXT: public function items(){
NEXT: return view('items.global')->with('id',Auth::id());
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\HomeController.php

- Hits: 5

LINE: 7
PREV: 
PREV: use Illuminate\Support\Facades\Auth;
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: 
NEXT: class HomeController extends Controller
NEXT: {
NEXT: /**
NEXT: * Create a new controller instance.

LINE: 31
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view('home')->with('id',$id);
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Show the application dashboard.

LINE: 32
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view('home')->with('id',$id);
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Show the application dashboard.
NEXT: *

LINE: 51
PREV: return view('dashboard');
PREV: }
PREV: 
TEXT: public function users()
NEXT: {
NEXT: return view('users');
NEXT: }
NEXT: 
NEXT: public function storeServiceFile(Request $request){
NEXT: if(!empty($request->serviceJson) && !Storage::disk('local')->has('firebase/credentials.json')){

LINE: 53
PREV: 
PREV: public function users()
PREV: {
TEXT: return view('users');
NEXT: }
NEXT: 
NEXT: public function storeServiceFile(Request $request){
NEXT: if(!empty($request->serviceJson) && !Storage::disk('local')->has('firebase/credentials.json')){
NEXT: Storage::disk('local')->put('firebase/credentials.json',file_get_contents(base64_decode($request->serviceJson)));
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\MySubscriptionsController.php

- Hits: 3

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class MySubscriptionsController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()
NEXT: {

LINE: 19
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view("my_subscriptions.index")->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function show($id)
NEXT: {

LINE: 20
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view("my_subscriptions.index")->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function show($id)
NEXT: {
NEXT: return view('my_subscriptions.show')->with('id', $id);

### FILE: C:\deploy\storepanel\app\Http\Controllers\OrderController.php

- Hits: 9

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: 
NEXT: class OrderController extends Controller

LINE: 23
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view("orders.index")->with('id', $id);
NEXT: }
NEXT: 
NEXT: 
NEXT: public function edit($id = '', $pid = '', $aid = '', $rid = '')

LINE: 24
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view("orders.index")->with('id', $id);
NEXT: }
NEXT: 
NEXT: 
NEXT: public function edit($id = '', $pid = '', $aid = '', $rid = '')
NEXT: {

LINE: 38
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view('orders.placed')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function acceptedOrders()
NEXT: {

LINE: 39
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view('orders.placed')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function acceptedOrders()
NEXT: {
NEXT: $user = Auth::user();

LINE: 47
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view('orders.accepted')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function rejectedOrders()
NEXT: {

LINE: 48
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view('orders.accepted')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function rejectedOrders()
NEXT: {
NEXT: $user = Auth::user();

LINE: 56
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view('orders.rejected')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function sendnotification(Request $request)
NEXT: {

LINE: 57
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view('orders.rejected')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function sendnotification(Request $request)
NEXT: {
NEXT: 

### FILE: C:\deploy\storepanel\app\Http\Controllers\OrderReviewController.php

- Hits: 3

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class OrderReviewController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()
NEXT: {

LINE: 18
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view("order_reviews.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: 
NEXT: public function edit($id)

LINE: 19
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view("order_reviews.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: 
NEXT: public function edit($id)
NEXT: {

### FILE: C:\deploy\storepanel\app\Http\Controllers\PayoutsController.php

- Hits: 5

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class PayoutsController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()
NEXT: {

LINE: 19
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view("vendors_payouts.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: public function create()
NEXT: {

LINE: 20
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view("vendors_payouts.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: public function create()
NEXT: {
NEXT: $user = Auth::user();

LINE: 28
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view("vendors_payouts.create")->with('id',$id);
NEXT: }
NEXT: }

LINE: 29
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view("vendors_payouts.create")->with('id',$id);
NEXT: }
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\POSController.php

- Hits: 3

LINE: 7
PREV: 
PREV: use Illuminate\Http\Request;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class POSController extends Controller
NEXT: {
NEXT: public function __construct()
NEXT: {
NEXT: $this->middleware('auth');

LINE: 19
PREV: public function pointOfSale(){
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: $commissionSettings = session('commissionSettings', [
NEXT: 'enabled' => false,
NEXT: 'type' => 'Percent',
NEXT: 'value' => 0,
NEXT: ]);

LINE: 20
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: $commissionSettings = session('commissionSettings', [
NEXT: 'enabled' => false,
NEXT: 'type' => 'Percent',
NEXT: 'value' => 0,
NEXT: ]);
NEXT: return view("pos.index", compact('commissionSettings','id'));

### FILE: C:\deploy\storepanel\app\Http\Controllers\ProductController.php

- Hits: 1

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use App\Models\User;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;

### FILE: C:\deploy\storepanel\app\Http\Controllers\SpecialOfferController.php

- Hits: 3

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: 
NEXT: class SpecialOfferController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()

LINE: 20
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view("specialOffer.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: }

LINE: 21
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view("specialOffer.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\SubscriptionController.php

- Hits: 13

LINE: 4
PREV: <?php
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: use Razorpay\Api\Api;
NEXT: use Illuminate\Http\Request;
NEXT: use Session;
NEXT: use Xendit\Configuration;
NEXT: use Xendit\Invoice\InvoiceApi;
NEXT: use Xendit\Invoice\CreateInvoiceRequest;

LINE: 23
PREV: {
PREV: $user = Auth::user();
PREV: $userId = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $userId)->first();
NEXT: $userId = $exist->uuid;
NEXT: return view("subscription_plans.show")->with('userId', $userId);
NEXT: }
NEXT: public function checkout($id,$sectionId)
NEXT: {
NEXT: $user = Auth::user();

LINE: 24
PREV: $user = Auth::user();
PREV: $userId = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $userId)->first();
TEXT: $userId = $exist->uuid;
NEXT: return view("subscription_plans.show")->with('userId', $userId);
NEXT: }
NEXT: public function checkout($id,$sectionId)
NEXT: {
NEXT: $user = Auth::user();
NEXT: $userId = Auth::id();

LINE: 31
PREV: {
PREV: $user = Auth::user();
PREV: $userId = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $userId)->first();
NEXT: $userId = $exist->uuid;
NEXT: $planId = $id;
NEXT: return view("subscription_plans.checkout")->with('userId',$userId)->with( 'planId',$planId)->with( 'sectionId', $sectionId);
NEXT: }
NEXT: public function orderProccessing(Request $request)
NEXT: {

LINE: 32
PREV: $user = Auth::user();
PREV: $userId = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $userId)->first();
TEXT: $userId = $exist->uuid;
NEXT: $planId = $id;
NEXT: return view("subscription_plans.checkout")->with('userId',$userId)->with( 'planId',$planId)->with( 'sectionId', $sectionId);
NEXT: }
NEXT: public function orderProccessing(Request $request)
NEXT: {
NEXT: $cart_order = $request->all();

LINE: 52
PREV: public function proccesstopay(Request $request)
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $cart = Session::get('cart', []);
NEXT: if (@$cart['cart_order']) {
NEXT: if ($cart['cart_order']['payment_method'] == 'razorpay') {
NEXT: $razorpaySecret = $cart['cart_order']['razorpaySecret'];
NEXT: $razorpayKey = $cart['cart_order']['razorpayKey'];
NEXT: $authorName = $cart['cart_order']['order_json']['authorName'];

LINE: 62
PREV: $total_pay = $cart['cart_order']['total_pay'];
PREV: $amount = 0;
PREV: $formatted_price =  $cart['cart_order']['currencyData']['symbol'].number_format($total_pay,$cart['cart_order']['currencyData']['decimal_degits']) ;
TEXT: return view('subscription_plans.razorpay', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'amount' => $total_pay,'authorName'=>$authorName, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'cart_order' => $cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: }
NEXT: else if ($cart['cart_order']['payment_method'] == 'payfast') {
NEXT: $payfast_merchant_key = $cart['cart_order']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $cart['cart_order']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $cart['cart_order']['payfast_isSandbox'];
NEXT: $payfast_return_url = route('success');

LINE: 304
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('subscription_plans.flutterwave', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'cart_order' => $cart['cart_order'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: }
NEXT: else if ($cart['cart_order']['payment_method'] == 'mercadopago') {
NEXT: $currency = "USD";
NEXT: if (@$cart['cart_order']['currencyData']['code']) {
NEXT: $currency = $cart['cart_order']['currencyData']['code'];
NEXT: }

LINE: 363
PREV: $isStripeSandboxEnabled = $cart['cart_order']['isStripeSandboxEnabled'];
PREV: $amount = 0;
PREV: $formatted_price =  $cart['cart_order']['currencyData']['symbol'].number_format($total_pay,$cart['cart_order']['currencyData']['decimal_degits']) ;
TEXT: return view('subscription_plans.stripe', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'cart_order' => $cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: }
NEXT: else if ($cart['cart_order']['payment_method'] == 'paypal') {
NEXT: $paypalKey = $cart['cart_order']['paypalKey'];
NEXT: $paypalSecret = $cart['cart_order']['paypalSecret'];
NEXT: $authorName = $cart['cart_order']['order_json']['authorName'];
NEXT: $total_pay = $cart['cart_order']['total_pay'];

LINE: 377
PREV: $total_pay = $cart['cart_order']['total_pay'];
PREV: $amount = 0;
PREV: $formatted_price =  $cart['cart_order']['currencyData']['symbol'].number_format($total_pay,$cart['cart_order']['currencyData']['decimal_degits']) ;
TEXT: return view('subscription_plans.paypal', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'cart_order' => $cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: }
NEXT: } else {
NEXT: return redirect()->route('checkout');
NEXT: }
NEXT: }
NEXT: public function processStripePayment(Request $request)

LINE: 427
PREV: $cart = Session::get('cart', []);
PREV: $order_json = array();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $cart['payment_status'] = true;
NEXT: Session::put('cart', $cart);
NEXT: Session::put('success', 'Payment successful');

LINE: 525
PREV: }
PREV: }
PREV: $payment_method = (@$cart['cart_order']['payment_method']) ? $cart['cart_order']['payment_method'] : '';
TEXT: return view('subscription_plans.success', ['cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'payment_method' => $payment_method]);
NEXT: }
NEXT: public function razorpaypayment(Request $request)
NEXT: {
NEXT: $input = $request->all();
NEXT: $email = Auth::user()->email;
NEXT: $user = VendorUsers::where('email', $email)->first();

LINE: 531
PREV: {
PREV: $input = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $cart = Session::get('cart', []);
NEXT: $api_secret = $cart['cart_order']['razorpaySecret'];
NEXT: $api_key = $cart['cart_order']['razorpayKey'];
NEXT: $api = new Api($api_key, $api_secret);
NEXT: $payment = $api->payment->fetch($input['razorpay_payment_id']);
NEXT: if (count($input) && ! empty($input['razorpay_payment_id'])) {

### FILE: C:\deploy\storepanel\app\Http\Controllers\TransactionController.php

- Hits: 3

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class TransactionController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()
NEXT: {

LINE: 19
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view("transactions.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: 
NEXT: }

LINE: 20
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view("transactions.index")->with('id',$id);
NEXT: }
NEXT: 
NEXT: 
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\UserController.php

- Hits: 6

LINE: 13
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: 
NEXT: class UserController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()

LINE: 26
PREV: public function index()
PREV: {
PREV: 
TEXT: return view("settings.users.index");
NEXT: }
NEXT: 
NEXT: 
NEXT: public function edit($id)
NEXT: {
NEXT: return view('settings.users.edit')->with('id',$id);

LINE: 32
PREV: 
PREV: public function edit($id)
PREV: {
TEXT: return view('settings.users.edit')->with('id',$id);
NEXT: }
NEXT: 
NEXT: public function profile()
NEXT: {
NEXT: $user = Auth::user();
NEXT: $id = Auth::id();

LINE: 39
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id',$id)->first();
NEXT: $id=$exist->uuid;
NEXT: return view('users.profile')->with('id',$id);
NEXT: }
NEXT: 
NEXT: 
NEXT: 

LINE: 40
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
TEXT: $id=$exist->uuid;
NEXT: return view('users.profile')->with('id',$id);
NEXT: }
NEXT: 
NEXT: 
NEXT: 
NEXT: 

LINE: 41
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id',$id)->first();
PREV: $id=$exist->uuid;
TEXT: return view('users.profile')->with('id',$id);
NEXT: }
NEXT: 
NEXT: 
NEXT: 
NEXT: 
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\WithdrawMethodController.php

- Hits: 5

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class WithdrawMethodController extends Controller
NEXT: {
NEXT: 
NEXT: public function __construct()
NEXT: {

LINE: 20
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view("withdraw_method.index")->with('id', $id);
NEXT: 
NEXT: }
NEXT: public function create()
NEXT: {

LINE: 21
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view("withdraw_method.index")->with('id', $id);
NEXT: 
NEXT: }
NEXT: public function create()
NEXT: {
NEXT: $user = Auth::user();

LINE: 29
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: $id = $exist->uuid;
NEXT: return view("withdraw_method.create")->with('id', $id);
NEXT: 
NEXT: }
NEXT: 
NEXT: 

LINE: 30
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: $id = $exist->uuid;
NEXT: return view("withdraw_method.create")->with('id', $id);
NEXT: 
NEXT: }
NEXT: 
NEXT: 
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\Auth\AjaxController.php

- Hits: 22

LINE: 21
PREV: 
PREV: 
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: use App\Models\User;
NEXT: 
NEXT: use Illuminate\Support\Facades\Hash;
NEXT: 
NEXT: use Illuminate\Support\Facades\DB;

LINE: 35
PREV: 
PREV: use App\Http\Controllers\Controller;
PREV: 
TEXT: use Illuminate\Foundation\Auth\AuthenticatesUsers;
NEXT: 
NEXT: use Laravel\Socialite\Facades\Socialite;
NEXT: 
NEXT: use Prettus\Validator\Exceptions\ValidatorException;
NEXT: 
NEXT: 

LINE: 57
PREV: 
PREV: $userId = $request->userId;
PREV: 
TEXT: $uuid = $request->id;
NEXT: 
NEXT: $password=$request->password;
NEXT: 
NEXT: $exist = VendorUsers::where('email',$request->email )->get();
NEXT: 
NEXT: $data = $exist->isEmpty();

LINE: 61
PREV: 
PREV: $password=$request->password;
PREV: 
TEXT: $exist = VendorUsers::where('email',$request->email )->get();
NEXT: 
NEXT: $data = $exist->isEmpty();
NEXT: 
NEXT: 
NEXT: 
NEXT: if($exist->isEmpty()){

LINE: 71
PREV: 
PREV: 
PREV: 
TEXT: $user=User::create([
NEXT: 
NEXT: 'name' => $request->email,
NEXT: 
NEXT: 'email' => $request->email,
NEXT: 
NEXT: 'password' => Hash::make($password),

LINE: 85
PREV: 
PREV: 
PREV: 
TEXT: DB::table('vendor_users')->insert([
NEXT: 
NEXT: 'user_id' => $user->id,
NEXT: 
NEXT: 'uuid' => $uuid,
NEXT: 
NEXT: 'email' => $request->email,

LINE: 89
PREV: 
PREV: 'user_id' => $user->id,
PREV: 
TEXT: 'uuid' => $uuid,
NEXT: 
NEXT: 'email' => $request->email,
NEXT: 
NEXT: ]);
NEXT: 
NEXT: 

LINE: 100
PREV: 
PREV: 
PREV: }else {
TEXT: $user = DB::table('vendor_users')->select('id')->where('email', $request->email)->first();
NEXT: DB::table('vendor_users')->where('id', $user->id)
NEXT: ->update([
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email
NEXT: ]);
NEXT: 

LINE: 101
PREV: 
PREV: }else {
PREV: $user = DB::table('vendor_users')->select('id')->where('email', $request->email)->first();
TEXT: DB::table('vendor_users')->where('id', $user->id)
NEXT: ->update([
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email
NEXT: ]);
NEXT: 
NEXT: }

LINE: 103
PREV: $user = DB::table('vendor_users')->select('id')->where('email', $request->email)->first();
PREV: DB::table('vendor_users')->where('id', $user->id)
PREV: ->update([
TEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email
NEXT: ]);
NEXT: 
NEXT: }
NEXT: 
NEXT: User::where('email', $request->email)->update([

LINE: 109
PREV: 
PREV: }
PREV: 
TEXT: User::where('email', $request->email)->update([
NEXT: 
NEXT: 'isSubscribed' => ($request->isSubscribed == null) ? '' : $request->isSubscribed
NEXT: 
NEXT: ]);
NEXT: 
NEXT: $user = User::where('email',$request->email)->first();

LINE: 115
PREV: 
PREV: ]);
PREV: 
TEXT: $user = User::where('email',$request->email)->first();
NEXT: 
NEXT: 
NEXT: 
NEXT: Auth::login($user,true);
NEXT: 
NEXT: $data = array();

LINE: 141
PREV: public function setTokenEmployee(Request $request)
PREV: {
PREV: 
TEXT: $uuid = $request->id;
NEXT: $password = $request->password;
NEXT: $exist = VendorUsers::where('email', $request->email)->get();
NEXT: $data = $exist->isEmpty();
NEXT: 
NEXT: if ($exist->isEmpty()) {
NEXT: 

LINE: 143
PREV: 
PREV: $uuid = $request->id;
PREV: $password = $request->password;
TEXT: $exist = VendorUsers::where('email', $request->email)->get();
NEXT: $data = $exist->isEmpty();
NEXT: 
NEXT: if ($exist->isEmpty()) {
NEXT: 
NEXT: $user = User::create([
NEXT: 'name' => $request->firstName . ' ' . $request->lastName,

LINE: 148
PREV: 
PREV: if ($exist->isEmpty()) {
PREV: 
TEXT: $user = User::create([
NEXT: 'name' => $request->firstName . ' ' . $request->lastName,
NEXT: 'email' => $request->email,
NEXT: 'password' => Hash::make($password),
NEXT: ]);
NEXT: 
NEXT: DB::table('vendor_users')->insert([

LINE: 154
PREV: 'password' => Hash::make($password),
PREV: ]);
PREV: 
TEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $user->id,
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: 
NEXT: } else {

LINE: 156
PREV: 
PREV: DB::table('vendor_users')->insert([
PREV: 'user_id' => $user->id,
TEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: 
NEXT: } else {
NEXT: $user = DB::table('vendor_users')->select('id')->where('email', $request->email)->first();
NEXT: DB::table('vendor_users')->where('id', $user->id)

LINE: 161
PREV: ]);
PREV: 
PREV: } else {
TEXT: $user = DB::table('vendor_users')->select('id')->where('email', $request->email)->first();
NEXT: DB::table('vendor_users')->where('id', $user->id)
NEXT: ->update([
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email
NEXT: ]);
NEXT: }

LINE: 162
PREV: 
PREV: } else {
PREV: $user = DB::table('vendor_users')->select('id')->where('email', $request->email)->first();
TEXT: DB::table('vendor_users')->where('id', $user->id)
NEXT: ->update([
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email
NEXT: ]);
NEXT: }
NEXT: 

LINE: 164
PREV: $user = DB::table('vendor_users')->select('id')->where('email', $request->email)->first();
PREV: DB::table('vendor_users')->where('id', $user->id)
PREV: ->update([
TEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email
NEXT: ]);
NEXT: }
NEXT: 
NEXT: return response()->json([
NEXT: 'access' => true,

LINE: 177
PREV: 
PREV: {
PREV: 
TEXT: User::where('email', $request->email)->update([
NEXT: 
NEXT: 'isSubscribed' => $request->isSubscribed
NEXT: 
NEXT: ]);
NEXT: 
NEXT: 

LINE: 209
PREV: 
PREV: $user_id = Auth::user()->user_id;
PREV: 
TEXT: $user = VendorUsers::where('user_id',$user_id)->first();
NEXT: 
NEXT: 
NEXT: 
NEXT: try {
NEXT: 
NEXT: Auth::logout();

### FILE: C:\deploy\storepanel\app\Http\Controllers\Auth\ConfirmPasswordController.php

- Hits: 1

LINE: 25
PREV: use ConfirmsPasswords;
PREV: 
PREV: /**
TEXT: * Where to redirect users when the intended url fails.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\storepanel\app\Http\Controllers\Auth\ForgotPasswordController.php

- Hits: 1

LINE: 17
PREV: |
PREV: | This controller is responsible for handling password reset emails and
PREV: | includes a trait which assists in sending these notifications from
TEXT: | your application to your users. Feel free to explore this trait.
NEXT: |
NEXT: */
NEXT: 
NEXT: use SendsPasswordResetEmails;
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\Auth\LoginController.php

- Hits: 4

LINE: 7
PREV: 
PREV: use App\Http\Controllers\Controller;
PREV: use App\Providers\RouteServiceProvider;
TEXT: use Illuminate\Foundation\Auth\AuthenticatesUsers;
NEXT: 
NEXT: class LoginController extends Controller
NEXT: {
NEXT: /*
NEXT: |--------------------------------------------------------------------------
NEXT: | Login Controller

LINE: 16
PREV: | Login Controller
PREV: |--------------------------------------------------------------------------
PREV: |
TEXT: | This controller handles authenticating users for the application and
NEXT: | redirecting them to your home screen. The controller uses a trait
NEXT: | to conveniently provide its functionality to your applications.
NEXT: |
NEXT: */
NEXT: 
NEXT: use AuthenticatesUsers;

LINE: 22
PREV: |
PREV: */
PREV: 
TEXT: use AuthenticatesUsers;
NEXT: 
NEXT: /**
NEXT: * Where to redirect users after login.
NEXT: *
NEXT: * @var string
NEXT: */

LINE: 25
PREV: use AuthenticatesUsers;
PREV: 
PREV: /**
TEXT: * Where to redirect users after login.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\storepanel\app\Http\Controllers\Auth\RegisterController.php

- Hits: 6

LINE: 8
PREV: use App\Http\Controllers\Controller;
PREV: use App\Providers\RouteServiceProvider;
PREV: use App\Models\User;
TEXT: use Illuminate\Foundation\Auth\RegistersUsers;
NEXT: use Illuminate\Support\Facades\Hash;
NEXT: use Illuminate\Support\Facades\Validator;
NEXT: 
NEXT: class RegisterController extends Controller
NEXT: {
NEXT: /*

LINE: 19
PREV: | Register Controller
PREV: |--------------------------------------------------------------------------
PREV: |
TEXT: | This controller handles the registration of new users as well as their
NEXT: | validation and creation. By default this controller uses a trait to
NEXT: | provide this functionality without requiring any additional code.
NEXT: |
NEXT: */
NEXT: 
NEXT: use RegistersUsers;

LINE: 25
PREV: |
PREV: */
PREV: 
TEXT: use RegistersUsers;
NEXT: 
NEXT: /**
NEXT: * Where to redirect users after registration.
NEXT: *
NEXT: * @var string
NEXT: */

LINE: 28
PREV: use RegistersUsers;
PREV: 
PREV: /**
TEXT: * Where to redirect users after registration.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

LINE: 54
PREV: {
PREV: return Validator::make($data, [
PREV: 'name' => ['required', 'string', 'max:255'],
TEXT: 'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
NEXT: 'password' => ['required', 'string', 'min:8', 'confirmed'],
NEXT: ]);
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Create a new user instance after a valid registration.

LINE: 67
PREV: */
PREV: protected function create(array $data)
PREV: {
TEXT: return User::create([
NEXT: 'name' => $data['name'],
NEXT: 'email' => $data['email'],
NEXT: 'password' => Hash::make($data['password']),
NEXT: ]);
NEXT: }
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\Auth\ResetPasswordController.php

- Hits: 1

LINE: 25
PREV: use ResetsPasswords;
PREV: 
PREV: /**
TEXT: * Where to redirect users after resetting their password.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: }

### FILE: C:\deploy\storepanel\app\Http\Controllers\Auth\VerificationController.php

- Hits: 1

LINE: 25
PREV: use VerifiesEmails;
PREV: 
PREV: /**
TEXT: * Where to redirect users after verification.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\storepanel\app\Models\User.php

- Hits: 3

LINE: 10
PREV: use Illuminate\Foundation\Auth\User as Authenticatable;
PREV: use Illuminate\Notifications\Notifiable;
PREV: use Laravel\Sanctum\HasApiTokens;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: 
NEXT: class User extends Authenticatable
NEXT: {
NEXT: use HasApiTokens, HasFactory, Notifiable;
NEXT: 

LINE: 49
PREV: 
PREV: public function getvendorId(){
PREV: 
TEXT: $exist = VendorUsers::where('user_id',Auth::user()->id)->first();
NEXT: if($exist){
NEXT: return $exist->uuid;
NEXT: }else{
NEXT: return null;
NEXT: }
NEXT: 

LINE: 51
PREV: 
PREV: $exist = VendorUsers::where('user_id',Auth::user()->id)->first();
PREV: if($exist){
TEXT: return $exist->uuid;
NEXT: }else{
NEXT: return null;
NEXT: }
NEXT: 
NEXT: }
NEXT: }

### FILE: C:\deploy\storepanel\app\Models\VendorUsers.php

- Hits: 3

LINE: 3
PREV: <?php
PREV: /**
TEXT: * File name: VendorUser.php
NEXT: * Last modified: 2020.06.11 at 16:10:52
NEXT: * Copyright (c) 2020
NEXT: */
NEXT: 
NEXT: namespace App\Models;
NEXT: 

LINE: 30
PREV: * @property string api_token
PREV: * @property string device_token
PREV: */
TEXT: class VendorUsers extends Authenticatable
NEXT: {
NEXT: 
NEXT: 
NEXT: /**
NEXT: * Validation rules
NEXT: *

LINE: 40
PREV: * @var array
PREV: */
PREV: 
TEXT: public $table = 'vendor_users';
NEXT: /**
NEXT: * The attributes that are mass assignable.
NEXT: *
NEXT: * @var array
NEXT: */
NEXT: 

### FILE: C:\deploy\storepanel\Modules\AI\routes\api.php

- Hits: 6

LINE: 19
PREV: */
PREV: 
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
TEXT: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
NEXT: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
NEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 20
PREV: 
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
TEXT: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
NEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 21
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
TEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 22
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
TEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 23
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
PREV: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
TEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 24
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
PREV: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
PREV: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
TEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

### FILE: C:\deploy\storepanel\Modules\AI\routes\web.php

- Hits: 2

LINE: 20
PREV: Route::get('title-auto-fill', [ProductAutoFillController::class, 'titleAutoFill'])->name('title-auto-fill');
PREV: Route::get('description-auto-fill', [ProductAutoFillController::class, 'descriptionAutoFill'])->name('description-auto-fill');
PREV: Route::get('variation-setup-auto-fill', [ProductAutoFillController::class, 'variationSetupAutoFill'])->name('variation-setup-auto-fill');
TEXT: Route::post('analyze-image-auto-fill', [ProductAutoFillController::class, 'analyzeImageAutoFill'])->name('analyze-image-auto-fill');
NEXT: Route::post('generate-title-suggestions', [ProductAutoFillController::class, 'generateTitleSuggestions'])->name('generate-title-suggestions');
NEXT: Route::get('ingredients-auto-fill', [ProductAutoFillController::class, 'ingredientsAutoFill'])->name('ingredients-auto-fill');
NEXT: Route::get('addons-auto-fill', [ProductAutoFillController::class, 'addonsAutoFill'])->name('addons-auto-fill');
NEXT: Route::get('specification-auto-fill', [ProductAutoFillController::class, 'specificationAutoFill'])->name('specification-auto-fill');
NEXT: });

LINE: 21
PREV: Route::get('description-auto-fill', [ProductAutoFillController::class, 'descriptionAutoFill'])->name('description-auto-fill');
PREV: Route::get('variation-setup-auto-fill', [ProductAutoFillController::class, 'variationSetupAutoFill'])->name('variation-setup-auto-fill');
PREV: Route::post('analyze-image-auto-fill', [ProductAutoFillController::class, 'analyzeImageAutoFill'])->name('analyze-image-auto-fill');
TEXT: Route::post('generate-title-suggestions', [ProductAutoFillController::class, 'generateTitleSuggestions'])->name('generate-title-suggestions');
NEXT: Route::get('ingredients-auto-fill', [ProductAutoFillController::class, 'ingredientsAutoFill'])->name('ingredients-auto-fill');
NEXT: Route::get('addons-auto-fill', [ProductAutoFillController::class, 'addonsAutoFill'])->name('addons-auto-fill');
NEXT: Route::get('specification-auto-fill', [ProductAutoFillController::class, 'specificationAutoFill'])->name('specification-auto-fill');
NEXT: });

### FILE: C:\deploy\storepanel\routes\api.php

- Hits: 1

LINE: 20
PREV: Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
PREV: return $request->user();
PREV: });
TEXT: Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

### FILE: C:\deploy\storepanel\routes\web.php

- Hits: 18

LINE: 18
PREV: 
PREV: Route::get('lang/change', [App\Http\Controllers\LangController::class, 'change'])->name('changeLang');
PREV: 
TEXT: Route::post('setToken', [App\Http\Controllers\Auth\AjaxController::class, 'setToken'])->name('setToken');
NEXT: Route::post('setSubcriptionFlag', [App\Http\Controllers\Auth\AjaxController::class, 'setSubcriptionFlag'])->name('setSubcriptionFlag');
NEXT: Route::post('setTokenEmployee', [App\Http\Controllers\Auth\AjaxController::class, 'setTokenEmployee'])->name('setTokenEmployee');
NEXT: 
NEXT: Route::get('register', function () {
NEXT: return view('auth.register');
NEXT: })->name('register');

LINE: 19
PREV: Route::get('lang/change', [App\Http\Controllers\LangController::class, 'change'])->name('changeLang');
PREV: 
PREV: Route::post('setToken', [App\Http\Controllers\Auth\AjaxController::class, 'setToken'])->name('setToken');
TEXT: Route::post('setSubcriptionFlag', [App\Http\Controllers\Auth\AjaxController::class, 'setSubcriptionFlag'])->name('setSubcriptionFlag');
NEXT: Route::post('setTokenEmployee', [App\Http\Controllers\Auth\AjaxController::class, 'setTokenEmployee'])->name('setTokenEmployee');
NEXT: 
NEXT: Route::get('register', function () {
NEXT: return view('auth.register');
NEXT: })->name('register');
NEXT: Route::get('register/phone', function () {

LINE: 20
PREV: 
PREV: Route::post('setToken', [App\Http\Controllers\Auth\AjaxController::class, 'setToken'])->name('setToken');
PREV: Route::post('setSubcriptionFlag', [App\Http\Controllers\Auth\AjaxController::class, 'setSubcriptionFlag'])->name('setSubcriptionFlag');
TEXT: Route::post('setTokenEmployee', [App\Http\Controllers\Auth\AjaxController::class, 'setTokenEmployee'])->name('setTokenEmployee');
NEXT: 
NEXT: Route::get('register', function () {
NEXT: return view('auth.register');
NEXT: })->name('register');
NEXT: Route::get('register/phone', function () {
NEXT: return view('auth.phone_register');

LINE: 30
PREV: })->name('register.phone');
PREV: 
PREV: 
TEXT: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class, 'storeServiceFile'])->name('storeServiceFile');
NEXT: Route::get('subscription-plan', [App\Http\Controllers\SubscriptionController::class, 'show'])->name('subscription-plan.show');
NEXT: 
NEXT: Route::get('subscription-plan/checkout/{id}/{sectionId}', [App\Http\Controllers\SubscriptionController::class, 'checkout'])->name('subscription-plans.checkout');
NEXT: 
NEXT: Route::post('payment-proccessing', [App\Http\Controllers\SubscriptionController::class, 'orderProccessing'])->name('payment-proccessing');
NEXT: 

LINE: 35
PREV: 
PREV: Route::get('subscription-plan/checkout/{id}/{sectionId}', [App\Http\Controllers\SubscriptionController::class, 'checkout'])->name('subscription-plans.checkout');
PREV: 
TEXT: Route::post('payment-proccessing', [App\Http\Controllers\SubscriptionController::class, 'orderProccessing'])->name('payment-proccessing');
NEXT: 
NEXT: 
NEXT: 
NEXT: Route::get('pay-subscription', [App\Http\Controllers\SubscriptionController::class, 'proccesstopay'])->name('pay-subscription');
NEXT: 
NEXT: Route::post('order-complete', [App\Http\Controllers\SubscriptionController::class, 'orderComplete'])->name('order-complete');

LINE: 41
PREV: 
PREV: Route::get('pay-subscription', [App\Http\Controllers\SubscriptionController::class, 'proccesstopay'])->name('pay-subscription');
PREV: 
TEXT: Route::post('order-complete', [App\Http\Controllers\SubscriptionController::class, 'orderComplete'])->name('order-complete');
NEXT: 
NEXT: Route::post('process-stripe', [App\Http\Controllers\SubscriptionController::class, 'processStripePayment'])->name('process-stripe');
NEXT: 
NEXT: Route::post('process-paypal', [App\Http\Controllers\SubscriptionController::class, 'processPaypalPayment'])->name('process-paypal');
NEXT: 
NEXT: Route::post('razorpaypayment', [App\Http\Controllers\SubscriptionController::class, 'razorpaypayment'])->name('razorpaypayment');

LINE: 43
PREV: 
PREV: Route::post('order-complete', [App\Http\Controllers\SubscriptionController::class, 'orderComplete'])->name('order-complete');
PREV: 
TEXT: Route::post('process-stripe', [App\Http\Controllers\SubscriptionController::class, 'processStripePayment'])->name('process-stripe');
NEXT: 
NEXT: Route::post('process-paypal', [App\Http\Controllers\SubscriptionController::class, 'processPaypalPayment'])->name('process-paypal');
NEXT: 
NEXT: Route::post('razorpaypayment', [App\Http\Controllers\SubscriptionController::class, 'razorpaypayment'])->name('razorpaypayment');
NEXT: 
NEXT: Route::post('process-mercadopago', [App\Http\Controllers\SubscriptionController::class, 'processMercadoPagoPayment'])->name('process-mercadopago');

LINE: 45
PREV: 
PREV: Route::post('process-stripe', [App\Http\Controllers\SubscriptionController::class, 'processStripePayment'])->name('process-stripe');
PREV: 
TEXT: Route::post('process-paypal', [App\Http\Controllers\SubscriptionController::class, 'processPaypalPayment'])->name('process-paypal');
NEXT: 
NEXT: Route::post('razorpaypayment', [App\Http\Controllers\SubscriptionController::class, 'razorpaypayment'])->name('razorpaypayment');
NEXT: 
NEXT: Route::post('process-mercadopago', [App\Http\Controllers\SubscriptionController::class, 'processMercadoPagoPayment'])->name('process-mercadopago');
NEXT: 
NEXT: 

LINE: 47
PREV: 
PREV: Route::post('process-paypal', [App\Http\Controllers\SubscriptionController::class, 'processPaypalPayment'])->name('process-paypal');
PREV: 
TEXT: Route::post('razorpaypayment', [App\Http\Controllers\SubscriptionController::class, 'razorpaypayment'])->name('razorpaypayment');
NEXT: 
NEXT: Route::post('process-mercadopago', [App\Http\Controllers\SubscriptionController::class, 'processMercadoPagoPayment'])->name('process-mercadopago');
NEXT: 
NEXT: 
NEXT: 
NEXT: Route::get('success', [App\Http\Controllers\SubscriptionController::class, 'success'])->name('success');

LINE: 49
PREV: 
PREV: Route::post('razorpaypayment', [App\Http\Controllers\SubscriptionController::class, 'razorpaypayment'])->name('razorpaypayment');
PREV: 
TEXT: Route::post('process-mercadopago', [App\Http\Controllers\SubscriptionController::class, 'processMercadoPagoPayment'])->name('process-mercadopago');
NEXT: 
NEXT: 
NEXT: 
NEXT: Route::get('success', [App\Http\Controllers\SubscriptionController::class, 'success'])->name('success');
NEXT: 
NEXT: Route::get('failed', [App\Http\Controllers\SubscriptionController::class, 'failed'])->name('failed');

LINE: 58
PREV: Route::get('failed', [App\Http\Controllers\SubscriptionController::class, 'failed'])->name('failed');
PREV: 
PREV: Route::get('notify', [App\Http\Controllers\SubscriptionController::class, 'notify'])->name('notify');
TEXT: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
NEXT: 
NEXT: Route::get('forgot-password', [App\Http\Controllers\Auth\LoginController::class, 'forgotPassword'])->name('forgot-password');
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('user.profile');
NEXT: 
NEXT: Auth::routes();
NEXT: 

LINE: 61
PREV: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
PREV: 
PREV: Route::get('forgot-password', [App\Http\Controllers\Auth\LoginController::class, 'forgotPassword'])->name('forgot-password');
TEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('user.profile');
NEXT: 
NEXT: Auth::routes();
NEXT: 
NEXT: 
NEXT: Route::middleware(['check.subscription'])->group(function () {
NEXT: 

LINE: 76
PREV: 
PREV: Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
PREV: 
TEXT: Route::get('/users', [App\Http\Controllers\HomeController::class, 'users'])->name('users');
NEXT: 
NEXT: Route::get('/restaurants', [App\Http\Controllers\RestaurantController::class, 'index'])->name('restaurants');
NEXT: 
NEXT: Route::get('/restaurants/edit/{id}', [App\Http\Controllers\RestaurantController::class, 'edit'])->name('restaurants.edit');
NEXT: 
NEXT: Route::get('/categories', [App\Http\Controllers\CategoryController::class, 'index'])->name('categories');

LINE: 84
PREV: 
PREV: Route::get('/categories', [App\Http\Controllers\CategoryController::class, 'index'])->name('categories');
PREV: 
TEXT: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
NEXT: 
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: 
NEXT: Route::get('/store', [App\Http\Controllers\UserController::class, 'profile'])->name('store');
NEXT: 
NEXT: Route::get('/categories/edit/{id}', [App\Http\Controllers\CategoryController::class, 'edit'])->name('categories.edit');

LINE: 86
PREV: 
PREV: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
PREV: 
TEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: 
NEXT: Route::get('/store', [App\Http\Controllers\UserController::class, 'profile'])->name('store');
NEXT: 
NEXT: Route::get('/categories/edit/{id}', [App\Http\Controllers\CategoryController::class, 'edit'])->name('categories.edit');
NEXT: 
NEXT: Route::get('/drivers', [App\Http\Controllers\DriverController::class, 'index'])->name('drivers');

LINE: 141
PREV: 
PREV: Route::get('/coupons/create', [App\Http\Controllers\CouponController::class, 'create'])->name('coupons.create');
PREV: 
TEXT: Route::post('order-status-notification', [App\Http\Controllers\OrderController::class, 'sendNotification'])->name('order-status-notification');
NEXT: 
NEXT: Route::post('/sendnotification', [App\Http\Controllers\BookTableController::class, 'sendnotification'])->name('sendnotification');
NEXT: 
NEXT: Route::get('/booktable', [App\Http\Controllers\BookTableController::class, 'index'])->name('booktable');
NEXT: 
NEXT: Route::get('/booktable/edit/{id}', [App\Http\Controllers\BookTableController::class, 'edit'])->name('booktable.edit');

LINE: 143
PREV: 
PREV: Route::post('order-status-notification', [App\Http\Controllers\OrderController::class, 'sendNotification'])->name('order-status-notification');
PREV: 
TEXT: Route::post('/sendnotification', [App\Http\Controllers\BookTableController::class, 'sendnotification'])->name('sendnotification');
NEXT: 
NEXT: Route::get('/booktable', [App\Http\Controllers\BookTableController::class, 'index'])->name('booktable');
NEXT: 
NEXT: Route::get('/booktable/edit/{id}', [App\Http\Controllers\BookTableController::class, 'edit'])->name('booktable.edit');
NEXT: 
NEXT: Route::get('/special-offer', [App\Http\Controllers\SpecialOfferController::class, 'index'])->name('specialOffer');

LINE: 187
PREV: Route::any('add-to-cart', [App\Http\Controllers\ProductController::class, 'addToCart'])->name('add-to-cart');
PREV: Route::any('cart-remove/{index}', [App\Http\Controllers\ProductController::class, 'remove'])->name('cart.remove');
PREV: Route::any('cart-update', [App\Http\Controllers\ProductController::class, 'update'])->name('cart.update');
TEXT: Route::post('/clear-cart', function () {
NEXT: session()->forget('cart');
NEXT: return response()->json(['success' => true]);
NEXT: })->name('clear.cart');
NEXT: Route::get('/get-session-cart', function () {
NEXT: return response()->json(session('cart', []));
NEXT: });

## WEBSITE_PANEL

- Root: C:\deploy\websitepanel

- Candidate files scanned: 42

### FILE: C:\deploy\websitepanel\app\Http\Controllers\AllVendorsController.php

- Hits: 1

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: 
NEXT: class AllVendorsController extends Controller
NEXT: {
NEXT: public function __construct()

### FILE: C:\deploy\websitepanel\app\Http\Controllers\ApiController.php

- Hits: 13

LINE: 7
PREV: use Illuminate\Support\Facades\Validator;
PREV: use Illuminate\Support\Facades\DB;
PREV: use Exception;
TEXT: use App\Models\VendorUsers;
NEXT: use App\Models\User;
NEXT: use Illuminate\Http\Request;
NEXT: 
NEXT: class ApiController extends Controller
NEXT: {
NEXT: public function deleteUserFromDb(Request $request) {

LINE: 13
PREV: 
PREV: class ApiController extends Controller
PREV: {
TEXT: public function deleteUserFromDb(Request $request) {
NEXT: 
NEXT: // LOCAL_SAFE_TEST_DELETE_USER_BYPASS
NEXT: // This block is only for local endpoint connectivity testing.
NEXT: // It prevents the fake UUID test from touching database/delete logic.
NEXT: if ($request->input('uuid') === '__SAFE_TEST_DO_NOT_DELETE__') {
NEXT: return response()->json([

LINE: 17
PREV: 
PREV: // LOCAL_SAFE_TEST_DELETE_USER_BYPASS
PREV: // This block is only for local endpoint connectivity testing.
TEXT: // It prevents the fake UUID test from touching database/delete logic.
NEXT: if ($request->input('uuid') === '__SAFE_TEST_DO_NOT_DELETE__') {
NEXT: return response()->json([
NEXT: 'status' => true,
NEXT: 'message' => 'SAFE_TEST_OK: endpoint reached, database bypassed for local connection test.',
NEXT: 'panel' => basename(base_path()),
NEXT: ], 200);

LINE: 18
PREV: // LOCAL_SAFE_TEST_DELETE_USER_BYPASS
PREV: // This block is only for local endpoint connectivity testing.
PREV: // It prevents the fake UUID test from touching database/delete logic.
TEXT: if ($request->input('uuid') === '__SAFE_TEST_DO_NOT_DELETE__') {
NEXT: return response()->json([
NEXT: 'status' => true,
NEXT: 'message' => 'SAFE_TEST_OK: endpoint reached, database bypassed for local connection test.',
NEXT: 'panel' => basename(base_path()),
NEXT: ], 200);
NEXT: }

LINE: 27
PREV: }
PREV: 
PREV: $validator = Validator::make($request->all(), [
TEXT: 'uuid' => 'required|exists:vendor_users,uuid',
NEXT: ]);
NEXT: 
NEXT: if ($validator->fails()) {
NEXT: return response()->json([
NEXT: 'status' => 'okay',
NEXT: 'message' => $validator->errors()->first(),

LINE: 40
PREV: DB::beginTransaction();
PREV: 
PREV: try {
TEXT: $vendorUser = VendorUsers::where('uuid', $request->uuid)->first();
NEXT: if ($vendorUser) {
NEXT: $user_id = $vendorUser->user_id;
NEXT: $user = User::find($user_id);
NEXT: if ($user) {
NEXT: $user->delete();
NEXT: } else {

LINE: 41
PREV: 
PREV: try {
PREV: $vendorUser = VendorUsers::where('uuid', $request->uuid)->first();
TEXT: if ($vendorUser) {
NEXT: $user_id = $vendorUser->user_id;
NEXT: $user = User::find($user_id);
NEXT: if ($user) {
NEXT: $user->delete();
NEXT: } else {
NEXT: return response()->json([

LINE: 42
PREV: try {
PREV: $vendorUser = VendorUsers::where('uuid', $request->uuid)->first();
PREV: if ($vendorUser) {
TEXT: $user_id = $vendorUser->user_id;
NEXT: $user = User::find($user_id);
NEXT: if ($user) {
NEXT: $user->delete();
NEXT: } else {
NEXT: return response()->json([
NEXT: 'status' => 'okay',

LINE: 43
PREV: $vendorUser = VendorUsers::where('uuid', $request->uuid)->first();
PREV: if ($vendorUser) {
PREV: $user_id = $vendorUser->user_id;
TEXT: $user = User::find($user_id);
NEXT: if ($user) {
NEXT: $user->delete();
NEXT: } else {
NEXT: return response()->json([
NEXT: 'status' => 'okay',
NEXT: 'message' => 'User not found with the provided user_id.',

LINE: 52
PREV: 'message' => 'User not found with the provided user_id.',
PREV: ], 404);
PREV: }
TEXT: $vendorUser->delete();
NEXT: } else {
NEXT: return response()->json([
NEXT: 'status' => 'okay',
NEXT: 'message' => 'No associated vendor user found with the provided UUID.',
NEXT: ], 404);
NEXT: }

LINE: 56
PREV: } else {
PREV: return response()->json([
PREV: 'status' => 'okay',
TEXT: 'message' => 'No associated vendor user found with the provided UUID.',
NEXT: ], 404);
NEXT: }
NEXT: 
NEXT: DB::commit();
NEXT: 
NEXT: return response()->json([

LINE: 60
PREV: ], 404);
PREV: }
PREV: 
TEXT: DB::commit();
NEXT: 
NEXT: return response()->json([
NEXT: 'status' => 'okay',
NEXT: 'message' => 'User and associated records deleted successfully.',
NEXT: ], 200);
NEXT: 

LINE: 68
PREV: ], 200);
PREV: 
PREV: } catch (Exception $e) {
TEXT: DB::rollBack();
NEXT: return response()->json([
NEXT: 'status' => 'error',
NEXT: 'message' => 'Failed to delete user. ' . $e->getMessage(),
NEXT: ], 500);
NEXT: }
NEXT: }

### FILE: C:\deploy\websitepanel\app\Http\Controllers\CheckoutController.php

- Hits: 12

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Http\Request;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: use App\Models\User;
NEXT: use Razorpay\Api\Api;
NEXT: use Xendit\Configuration;
NEXT: use Xendit\Invoice\InvoiceApi;
NEXT: use Xendit\Invoice\CreateInvoiceRequest;
NEXT: use Xendit\XenditSdkException;

LINE: 29
PREV: public function checkout()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $cart = Session::get('cart', []);
NEXT: if (Session::get('takeawayOption') == "true") {
NEXT: } else {
NEXT: $deliveryChargemain = @$_COOKIE['deliveryChargemain'];
NEXT: $address_lat = @$_COOKIE['address_lat'];
NEXT: $address_lng = @$_COOKIE['address_lng'];

LINE: 75
PREV: Session::save();
PREV: }
PREV: 
TEXT: return view('checkout.checkout', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function calculateTax($cart){
NEXT: 
NEXT: $cart['taxBreakdownGrouped'] = [
NEXT: 'item' => [],

LINE: 220
PREV: public function proccesstopay()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $cart = Session::get('cart', []);
NEXT: if (@$cart['cart_order']) {
NEXT: if ($cart['cart_order']['payment_method'] == 'razorpay') {
NEXT: $razorpaySecret = $cart['cart_order']['razorpaySecret'];
NEXT: $razorpayKey = $cart['cart_order']['razorpayKey'];
NEXT: $authorName = $cart['cart_order']['authorName'];

LINE: 229
PREV: $authorName = $cart['cart_order']['authorName'];
PREV: $total_pay = $cart['cart_order']['total_pay'];
PREV: $formatted_price = $cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('checkout.razorpay', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'cart_order' => $cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($cart['cart_order']['payment_method'] == 'payfast') {
NEXT: $payfast_merchant_key = $cart['cart_order']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $cart['cart_order']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $cart['cart_order']['payfast_isSandbox'];
NEXT: $payfast_return_url = route('success');

LINE: 476
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('checkout.flutterwave', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'cart_order' => $cart['cart_order'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($cart['cart_order']['payment_method'] == 'mercadopago') {
NEXT: $currency = 'USD';
NEXT: if (@$cart['cart_order']['currencyData']['code']) {
NEXT: $currency = $cart['cart_order']['currencyData']['code'];
NEXT: }

LINE: 553
PREV: $authorName = $cart['cart_order']['authorName'];
PREV: $total_pay = $cart['cart_order']['total_pay'];
PREV: $formatted_price = $cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('checkout.stripe', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'cart_order' => $cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($cart['cart_order']['payment_method'] == 'paypal') {
NEXT: $paypalKey = $cart['cart_order']['paypalKey'];
NEXT: $paypalSecret = $cart['cart_order']['paypalSecret'];
NEXT: $authorName = $cart['cart_order']['authorName'];
NEXT: $total_pay = $cart['cart_order']['total_pay'];
NEXT: $address_line1 = $cart['cart_order']['address_line1'];

LINE: 570
PREV: $authorName = $cart['cart_order']['authorName'];
PREV: $total_pay = $cart['cart_order']['total_pay'];
PREV: $formatted_price = $cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('checkout.paypal', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'cart_order' => $cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: }
NEXT: 
NEXT: } else {
NEXT: return redirect()->route('checkout');
NEXT: }
NEXT: }

LINE: 672
PREV: {
PREV: $input = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $cart = Session::get('cart', []);
NEXT: $api_secret = $cart['cart_order']['razorpaySecret'];
NEXT: $api_key = $cart['cart_order']['razorpayKey'];
NEXT: $api = new Api($api_key, $api_secret);
NEXT: $payment = $api->payment->fetch($input['razorpay_payment_id']);
NEXT: if (count($input) && !empty($input['razorpay_payment_id'])) {

LINE: 743
PREV: $cart = Session::get('cart', []);
PREV: $order_json = array();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $cart['payment_status'] = true;
NEXT: Session::put('cart', $cart);
NEXT: Session::put('success', 'Payment successful');

LINE: 865
PREV: }
PREV: }
PREV: $payment_method = (@$cart['cart_order']['payment_method']) ? $cart['cart_order']['payment_method'] : 'cod';
TEXT: return view('checkout.success', ['cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'payment_method' => $payment_method]);
NEXT: }
NEXT: 
NEXT: public function orderProccessing(Request $request)
NEXT: {
NEXT: $cart_order = $request->all();
NEXT: $email = Auth::user()->email;

LINE: 872
PREV: {
PREV: $cart_order = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $cart = Session::get('cart', []);
NEXT: $cart['cart_order'] = $cart_order;
NEXT: Session::put('cart', $cart);
NEXT: Session::save();
NEXT: $res = array('status' => true);
NEXT: echo json_encode($res);

### FILE: C:\deploy\websitepanel\app\Http\Controllers\DiveinVendorController.php

- Hits: 1

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: 
NEXT: class DiveinVendorController extends Controller
NEXT: {
NEXT: public function __construct()

### FILE: C:\deploy\websitepanel\app\Http\Controllers\GiftCardController.php

- Hits: 11

LINE: 5
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Http\Request;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: use App\Models\User;
NEXT: use Razorpay\Api\Api;
NEXT: use Session;
NEXT: use Xendit\Configuration;
NEXT: use Xendit\Invoice\InvoiceApi;
NEXT: use Xendit\Invoice\CreateInvoiceRequest;

LINE: 36
PREV: public function index()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: return view('gift_card.giftcard')->with('id', $user->uuid);
NEXT: }
NEXT: 
NEXT: public function giftCardProcessing(Request $request)
NEXT: {
NEXT: $gift_cart_order = $request->all();

LINE: 37
PREV: {
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
TEXT: return view('gift_card.giftcard')->with('id', $user->uuid);
NEXT: }
NEXT: 
NEXT: public function giftCardProcessing(Request $request)
NEXT: {
NEXT: $gift_cart_order = $request->all();
NEXT: $cart = Session::get('gift_cart', []);

LINE: 72
PREV: public function proccesstopay(Request $request)
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $cart = Session::get('gift_cart', []);
NEXT: if (@$cart['gift_cart_order']) {
NEXT: if ($cart['gift_cart_order']['payment_method'] == 'razorpay') {
NEXT: $razorpaySecret = $cart['gift_cart_order']['razorpaySecret'];
NEXT: $razorpayKey = $cart['gift_cart_order']['razorpayKey'];
NEXT: $authorName = '';

LINE: 81
PREV: $authorName = '';
PREV: $total_pay = $cart['gift_cart_order']['total_pay'];
PREV: $formatted_price = $cart['gift_cart_order']['currencyData']['symbol'] . number_format($total_pay, $cart['gift_cart_order']['currencyData']['decimal_degits']);
TEXT: return view('gift_card.razorpay', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'gift_cart_order' => $cart['gift_cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($cart['gift_cart_order']['payment_method'] == 'payfast') {
NEXT: 
NEXT: $payfast_merchant_key = $cart['gift_cart_order']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $cart['gift_cart_order']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $cart['gift_cart_order']['payfast_isSandbox'];
NEXT: $payfast_return_url = route('giftcard.success');

LINE: 167
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('gift_card.flutterwave', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'gift_cart_order' => $cart['gift_cart_order'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: } else if ($cart['gift_cart_order']['payment_method'] == 'mercadopago') {
NEXT: $currency = "USD";
NEXT: if (@$cart['gift_cart_order']['currencyData']['code']) {
NEXT: $currency = $cart['gift_cart_order']['currencyData']['code'];
NEXT: }
NEXT: $mercadopago_public_key = $cart['gift_cart_order']['mercadopago_public_key'];

LINE: 230
PREV: $authorName = $cart['gift_cart_order']['authorName'];
PREV: $total_pay = $cart['gift_cart_order']['total_pay'];
PREV: $formatted_price = $cart['gift_cart_order']['currencyData']['symbol'] . number_format($total_pay, $cart['gift_cart_order']['currencyData']['decimal_degits']);
TEXT: return view('gift_card.stripe', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'gift_cart_order' => $cart['gift_cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($cart['gift_cart_order']['payment_method'] == 'paypal') {
NEXT: $paypalKey = $cart['gift_cart_order']['paypalKey'];
NEXT: $paypalSecret = $cart['gift_cart_order']['paypalSecret'];
NEXT: $authorName = $cart['gift_cart_order']['authorName'];
NEXT: $total_pay = $cart['gift_cart_order']['total_pay'];
NEXT: $address_line1 = $cart['gift_cart_order']['address_line1'];

LINE: 247
PREV: $authorName = $cart['gift_cart_order']['authorName'];
PREV: $total_pay = $cart['gift_cart_order']['total_pay'];
PREV: $formatted_price = $cart['gift_cart_order']['currencyData']['symbol'] . number_format($total_pay, $cart['gift_cart_order']['currencyData']['decimal_degits']);
TEXT: return view('gift_card.paypal', ['is_checkout' => 1, 'cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'gift_cart_order' => $cart['gift_cart_order'], 'formatted_price' => $formatted_price]);
NEXT: }else if($cart['gift_cart_order']['payment_method']=='xendit'){
NEXT: $xendit_enable=$cart['gift_cart_order']['xendit_enable'];
NEXT: $xendit_apiKey=$cart['gift_cart_order']['xendit_apiKey'];
NEXT: if (isset($xendit_enable) && $xendit_enable == true) {
NEXT: $total_pay = $cart['gift_cart_order']['total_pay'];
NEXT: //$currency = $cart['gift_cart_order']['currencyData']['code'];

LINE: 398
PREV: {
PREV: $input = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $cart = Session::get('gift_cart', []);
NEXT: $api_secret = $cart['gift_cart_order']['razorpaySecret'];
NEXT: $api_key = $cart['gift_cart_order']['razorpayKey'];
NEXT: $api = new Api($api_key, $api_secret);
NEXT: $payment = $api->payment->fetch($input['razorpay_payment_id']);
NEXT: if (count($input) && !empty($input['razorpay_payment_id'])) {

LINE: 525
PREV: }
PREV: $cart = Session::get('gift_cart', []);
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $cart['payment_status'] = true;
NEXT: Session::put('gift_cart', $cart);
NEXT: Session::put('success', 'Payment successful');

LINE: 621
PREV: }
PREV: }
PREV: $payment_method = (@$cart['gift_cart_order']['payment_method']) ? $cart['gift_cart_order']['payment_method'] : 'cod';
TEXT: return view('gift_card.success', ['cart' => $cart, 'id' => $user->uuid, 'email' => $email, 'payment_method' => $payment_method]);
NEXT: }
NEXT: public function giftcards()
NEXT: {
NEXT: return view('gift_card.my_giftcard');
NEXT: }
NEXT: }

### FILE: C:\deploy\websitepanel\app\Http\Controllers\OnDemandCheckoutController.php

- Hits: 8

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use App\Models\User;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Razorpay\Api\Api;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: use Xendit\Configuration;

LINE: 32
PREV: public function proccesstopay()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $ondemand_cart = Session::get('ondemand_cart', []);
NEXT: 
NEXT: if (@$ondemand_cart['cart_order']) {
NEXT: 
NEXT: if ($ondemand_cart['cart_order']['payment_method'] == 'razorpay') {
NEXT: 

LINE: 44
PREV: $authorName = $ondemand_cart['cart_order']['authorName'];
PREV: $total_pay = $ondemand_cart['cart_order']['total_pay'];
PREV: $formatted_price = $ondemand_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $ondemand_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.razorpay', ['is_checkout' => 1, 'cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'cart_order' => $ondemand_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($ondemand_cart['cart_order']['payment_method'] == 'payfast') {
NEXT: 
NEXT: $payfast_merchant_key = $ondemand_cart['cart_order']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $ondemand_cart['cart_order']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $ondemand_cart['cart_order']['payfast_isSandbox'];

LINE: 135
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('providersService.flutterwave', ['is_checkout' => 1, 'cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'cart_order' => $ondemand_cart['cart_order'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($ondemand_cart['cart_order']['payment_method'] == 'stripe') {
NEXT: 
NEXT: $stripeKey = $ondemand_cart['cart_order']['stripeKey'];
NEXT: $stripeSecret = $ondemand_cart['cart_order']['stripeSecret'];
NEXT: $authorName = $ondemand_cart['cart_order']['authorName'];

LINE: 154
PREV: $authorName = $ondemand_cart['cart_order']['authorName'];
PREV: $total_pay = $ondemand_cart['cart_order']['total_pay'];
PREV: $formatted_price = $ondemand_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $ondemand_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.stripe', ['is_checkout' => 1, 'cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'cart_order' => $ondemand_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($ondemand_cart['cart_order']['payment_method'] == 'paypal') {
NEXT: 
NEXT: $paypalKey = $ondemand_cart['cart_order']['paypalKey'];
NEXT: $paypalSecret = $ondemand_cart['cart_order']['paypalSecret'];
NEXT: $authorName = $ondemand_cart['cart_order']['authorName'];

LINE: 173
PREV: $authorName = $ondemand_cart['cart_order']['authorName'];
PREV: $total_pay = $ondemand_cart['cart_order']['total_pay'];
PREV: $formatted_price = $ondemand_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $ondemand_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.paypal', ['is_checkout' => 1, 'cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'cart_order' => $ondemand_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($ondemand_cart['cart_order']['payment_method'] == 'mercadopago') {
NEXT: 
NEXT: $currency = "USD";
NEXT: if (@$ondemand_cart['cart_order']['currencyData']['code']) {
NEXT: $currency = $ondemand_cart['cart_order']['currencyData']['code'];

LINE: 507
PREV: $ondemand_cart = Session::get('ondemand_cart', []);
PREV: $order_json = array();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $ondemand_cart['paymentStatus'] = true;
NEXT: Session::put('ondemand_cart', $ondemand_cart);
NEXT: Session::put('success', 'Payment successful');

LINE: 603
PREV: }
PREV: }
PREV: $payment_method = (@$ondemand_cart['cart_order']['payment_method']) ? $ondemand_cart['cart_order']['payment_method'] : 'cod';
TEXT: return view('providersService.success', ['cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'payment_method' => $payment_method]);
NEXT: }
NEXT: /**
NEXT: * Write code on Method
NEXT: *
NEXT: * @return response()
NEXT: */

### FILE: C:\deploy\websitepanel\app\Http\Controllers\OnDemandController.php

- Hits: 5

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Razorpay\Api\Api;
NEXT: use Session;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;

LINE: 73
PREV: public function onDemandCheckout(Request $request)
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $ondemand_cart = Session::get('ondemand_cart', []);
NEXT: return view('providersService.ondemand_checkout', ['is_checkout' => 1, 'ondemand_cart' => $ondemand_cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function setExtraCharge(Request $request)
NEXT: {

LINE: 75
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
PREV: $ondemand_cart = Session::get('ondemand_cart', []);
TEXT: return view('providersService.ondemand_checkout', ['is_checkout' => 1, 'ondemand_cart' => $ondemand_cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function setExtraCharge(Request $request)
NEXT: {
NEXT: $extra_charge = $request->get('extraCharge');
NEXT: $order_id = $request->get('orderId');

LINE: 93
PREV: public function payExtraCharge(Request $request)
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $extra_charge_cart = Session::get('extra_charge_cart');
NEXT: return view('providersService.extra_charge.pay_extra_charge', ['is_checkout' => 1, 'extra_charge_cart' => $extra_charge_cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function changeQuantityCart(Request $request)
NEXT: {

LINE: 95
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
PREV: $extra_charge_cart = Session::get('extra_charge_cart');
TEXT: return view('providersService.extra_charge.pay_extra_charge', ['is_checkout' => 1, 'extra_charge_cart' => $extra_charge_cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function changeQuantityCart(Request $request)
NEXT: {
NEXT: $req = $request->all();
NEXT: $id = $req['id'];

### FILE: C:\deploy\websitepanel\app\Http\Controllers\OnDemandOrderController.php

- Hits: 1

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: 
NEXT: class OnDemandOrderController extends Controller
NEXT: {
NEXT: /**

### FILE: C:\deploy\websitepanel\app\Http\Controllers\OrderController.php

- Hits: 1

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: 
NEXT: class OrderController extends Controller
NEXT: {
NEXT: /**

### FILE: C:\deploy\websitepanel\app\Http\Controllers\ParcelController.php

- Hits: 18

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use App\Models\User;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Razorpay\Api\Api;
NEXT: use Session;
NEXT: use Xendit\Configuration;
NEXT: use Xendit\Invoice\InvoiceApi;

LINE: 46
PREV: public function parcelCheckout()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $parcel_cart = Session::get('parcel_cart', []);
NEXT: return view('parcel.parcel_checkout', ['parcel_cart' => $parcel_cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function parcelCart(Request $request)
NEXT: {

LINE: 48
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
PREV: $parcel_cart = Session::get('parcel_cart', []);
TEXT: return view('parcel.parcel_checkout', ['parcel_cart' => $parcel_cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function parcelCart(Request $request)
NEXT: {
NEXT: Session::put('parcel_cart', []);
NEXT: Session::save();

LINE: 138
PREV: Session::save();
PREV: 
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $res = array('status' => true, 'html' => view('parcel.parcel_checkout', ['parcel_cart' => $parcel_cart, 'id' => $user->uuid])->render());
NEXT: echo json_encode($res);
NEXT: exit;
NEXT: }
NEXT: 
NEXT: function distance($lat1, $lon1, $lat2, $lon2)

LINE: 139
PREV: 
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
TEXT: $res = array('status' => true, 'html' => view('parcel.parcel_checkout', ['parcel_cart' => $parcel_cart, 'id' => $user->uuid])->render());
NEXT: echo json_encode($res);
NEXT: exit;
NEXT: }
NEXT: 
NEXT: function distance($lat1, $lon1, $lat2, $lon2)
NEXT: {

LINE: 207
PREV: Session::save();
PREV: 
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $res = array('status' => true, 'html' => view('parcel.parcel_checkout', ['parcel_cart' => $parcel_cart, 'id' => $user->uuid])->render());
NEXT: echo json_encode($res);
NEXT: exit;
NEXT: }
NEXT: }
NEXT: 

LINE: 208
PREV: 
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
TEXT: $res = array('status' => true, 'html' => view('parcel.parcel_checkout', ['parcel_cart' => $parcel_cart, 'id' => $user->uuid])->render());
NEXT: echo json_encode($res);
NEXT: exit;
NEXT: }
NEXT: }
NEXT: 
NEXT: public function removeParcelCoupon(Request $request)

LINE: 290
PREV: {
PREV: $cart_order = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $parcel_cart = Session::get('parcel_cart', []);
NEXT: $parcel_cart['cart_order'] = $cart_order;
NEXT: Session::put('parcel_cart', $parcel_cart);
NEXT: Session::save();
NEXT: $res = array('status' => true);
NEXT: echo json_encode($res);

LINE: 303
PREV: public function processParcelOrderPay()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $parcel_cart = Session::get('parcel_cart', []);
NEXT: if (@$parcel_cart['cart_order']) {
NEXT: if ($parcel_cart['cart_order']['payment_method'] == 'razorpay') {
NEXT: $razorpaySecret = $parcel_cart['cart_order']['razorpaySecret'];
NEXT: $razorpayKey = $parcel_cart['cart_order']['razorpayKey'];
NEXT: $authorName = $parcel_cart['cart_order']['authorName'];

LINE: 312
PREV: $authorName = $parcel_cart['cart_order']['authorName'];
PREV: $total_pay = $parcel_cart['cart_order']['total_pay'];
PREV: $formatted_price = $parcel_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $parcel_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('parcel.razorpay', ['is_checkout' => 1, 'parcel_cart' => $parcel_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'cart_order' => $parcel_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($parcel_cart['cart_order']['payment_method'] == 'payfast') {
NEXT: $payfast_merchant_key = $parcel_cart['cart_order']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $parcel_cart['cart_order']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $parcel_cart['cart_order']['payfast_isSandbox'];
NEXT: $payfast_return_url = route('parcel_success');
NEXT: $payfast_notify_url = route('parcel_notify');

LINE: 397
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('parcel.flutterwave', ['is_checkout' => 1, 'parcel_cart' => $parcel_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'cart_order' => $parcel_cart['cart_order'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: } else if ($parcel_cart['cart_order']['payment_method'] == 'mercadopago') {
NEXT: $currency = "USD";
NEXT: if (@$parcel_cart['cart_order']['currencyData']['code']) {
NEXT: $currency = $parcel_cart['cart_order']['currencyData']['code'];
NEXT: }
NEXT: $mercadopago_public_key = $parcel_cart['cart_order']['mercadopago_public_key'];

LINE: 464
PREV: $authorName = $parcel_cart['cart_order']['authorName'];
PREV: $total_pay = $parcel_cart['cart_order']['total_pay'];
PREV: $formatted_price = $parcel_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $parcel_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('parcel.stripe', ['is_checkout' => 1, 'parcel_cart' => $parcel_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'cart_order' => $parcel_cart['cart_order'], 'senderAddress' => $senderAddress, 'formatted_price' => $formatted_price]);
NEXT: } else if ($parcel_cart['cart_order']['payment_method'] == 'paypal') {
NEXT: $paypalSecret = $parcel_cart['cart_order']['paypalSecret'];
NEXT: $paypalKey = $parcel_cart['cart_order']['paypalKey'];
NEXT: $ispaypalSandboxEnabled = $parcel_cart['cart_order']['ispaypalSandboxEnabled'];
NEXT: $authorName = $parcel_cart['cart_order']['authorName'];
NEXT: $total_pay = $parcel_cart['cart_order']['total_pay'];

LINE: 472
PREV: $authorName = $parcel_cart['cart_order']['authorName'];
PREV: $total_pay = $parcel_cart['cart_order']['total_pay'];
PREV: $formatted_price = $parcel_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $parcel_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('parcel.paypal', ['is_checkout' => 1, 'parcel_cart' => $parcel_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'cart_order' => $parcel_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: }else if($parcel_cart['cart_order']['payment_method']=='xendit'){
NEXT: $xendit_enable=$parcel_cart['cart_order']['xendit_enable'];
NEXT: $xendit_apiKey=$parcel_cart['cart_order']['xendit_apiKey'];
NEXT: if (isset($xendit_enable) && $xendit_enable == true) {
NEXT: $total_pay = $parcel_cart['cart_order']['total_pay'];
NEXT: $currency = "IDR";

LINE: 626
PREV: {
PREV: $input = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $parcel_cart = Session::get('parcel_cart', []);
NEXT: $api_secret = $parcel_cart['cart_order']['razorpaySecret'];
NEXT: $api_key = $parcel_cart['cart_order']['razorpayKey'];
NEXT: $api = new Api($api_key, $api_secret);
NEXT: $payment = $api->payment->fetch($input['razorpay_payment_id']);
NEXT: if (count($input) && !empty($input['razorpay_payment_id'])) {

LINE: 770
PREV: $parcel_cart = Session::get('parcel_cart', []);
PREV: $order_json = array();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: 
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $parcel_cart['payment_status'] = true;
NEXT: Session::put('parcel_cart', $parcel_cart);

LINE: 874
PREV: }
PREV: }
PREV: $payment_method = (@$parcel_cart['cart_order']['payment_method']) ? $parcel_cart['cart_order']['payment_method'] : 'cod';
TEXT: return view('parcel.success', ['parcel_cart' => $parcel_cart, 'id' => $user->uuid, 'email' => $email, 'payment_method' => $payment_method]);
NEXT: }
NEXT: 
NEXT: public function parcelOrderComplete(Request $request)
NEXT: {
NEXT: $email = Auth::user()->email;
NEXT: $user = VendorUsers::where('email', $email)->first();

LINE: 880
PREV: public function parcelOrderComplete(Request $request)
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $parcel_cart = array();
NEXT: Session::put('parcel_cart', []);
NEXT: Session::put('success', 'Your order has been successful!');
NEXT: Session::save();
NEXT: $res = array('status' => true, 'order_complete' => true, 'html' => view('parcel.success', ['parcel_cart' => $parcel_cart, 'order_complete' => true, 'is_checkout' => 1, 'id' => $user->uuid])->render());
NEXT: echo json_encode($res);

LINE: 885
PREV: Session::put('parcel_cart', []);
PREV: Session::put('success', 'Your order has been successful!');
PREV: Session::save();
TEXT: $res = array('status' => true, 'order_complete' => true, 'html' => view('parcel.success', ['parcel_cart' => $parcel_cart, 'order_complete' => true, 'is_checkout' => 1, 'id' => $user->uuid])->render());
NEXT: echo json_encode($res);
NEXT: exit;
NEXT: }
NEXT: 
NEXT: public function applyTax($amount, $tax) {
NEXT: if (!$tax['enable']) return 0;

### FILE: C:\deploy\websitepanel\app\Http\Controllers\PayExtraChargeController.php

- Hits: 8

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use App\Models\User;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Razorpay\Api\Api;
NEXT: use Session;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;

LINE: 37
PREV: public function proccesstopay()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $ondemand_cart = Session::get('ondemand_cart', []);
NEXT: if (@$ondemand_cart['cart_order']) {
NEXT: if ($ondemand_cart['cart_order']['payment_method'] == 'razorpay') {
NEXT: $razorpaySecret = $ondemand_cart['cart_order']['razorpaySecret'];
NEXT: $razorpayKey = $ondemand_cart['cart_order']['razorpayKey'];
NEXT: $authorName = $ondemand_cart['cart_order']['authorName'];

LINE: 46
PREV: $authorName = $ondemand_cart['cart_order']['authorName'];
PREV: $total_pay = $ondemand_cart['cart_order']['total_pay'];
PREV: $formatted_price = $ondemand_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $ondemand_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.extra_charge.razorpay', ['is_checkout' => 1, 'cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'cart_order' => $ondemand_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($ondemand_cart['cart_order']['payment_method'] == 'payfast') {
NEXT: $payfast_merchant_key = $ondemand_cart['cart_order']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $ondemand_cart['cart_order']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $ondemand_cart['cart_order']['payfast_isSandbox'];
NEXT: $payfast_return_url = route('extra-pay-success');
NEXT: $payfast_notify_url = route('notify');

LINE: 132
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('providersService.extra_charge.flutterwave', ['is_checkout' => 1, 'cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'cart_order' => $ondemand_cart['cart_order'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: } else if ($ondemand_cart['cart_order']['payment_method'] == 'stripe') {
NEXT: $stripeKey = $ondemand_cart['cart_order']['stripeKey'];
NEXT: $stripeSecret = $ondemand_cart['cart_order']['stripeSecret'];
NEXT: $authorName = $ondemand_cart['cart_order']['authorName'];
NEXT: $total_pay = $ondemand_cart['cart_order']['total_pay'];
NEXT: $address_line1 = $ondemand_cart['cart_order']['address_line1'];

LINE: 149
PREV: $authorName = $ondemand_cart['cart_order']['authorName'];
PREV: $total_pay = $ondemand_cart['cart_order']['total_pay'];
PREV: $formatted_price = $ondemand_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $ondemand_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.extra_charge.stripe', ['is_checkout' => 1, 'cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'cart_order' => $ondemand_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($ondemand_cart['cart_order']['payment_method'] == 'paypal') {
NEXT: $paypalKey = $ondemand_cart['cart_order']['paypalKey'];
NEXT: $paypalSecret = $ondemand_cart['cart_order']['paypalSecret'];
NEXT: $authorName = $ondemand_cart['cart_order']['authorName'];
NEXT: $total_pay = $ondemand_cart['cart_order']['total_pay'];
NEXT: $address_line1 = $ondemand_cart['cart_order']['address_line1'];

LINE: 166
PREV: $authorName = $ondemand_cart['cart_order']['authorName'];
PREV: $total_pay = $ondemand_cart['cart_order']['total_pay'];
PREV: $formatted_price = $ondemand_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $ondemand_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.extra_charge.paypal', ['is_checkout' => 1, 'cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'cart_order' => $ondemand_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($ondemand_cart['cart_order']['payment_method'] == 'mercadopago') {
NEXT: $currency = "USD";
NEXT: if (@$ondemand_cart['cart_order']['currencyData']['code']) {
NEXT: $currency = $ondemand_cart['cart_order']['currencyData']['code'];
NEXT: }
NEXT: $mercadopago_public_key = $ondemand_cart['cart_order']['mercadopago_public_key'];

LINE: 500
PREV: $ondemand_cart = Session::get('ondemand_cart', []);
PREV: $order_json = array();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $ondemand_cart['paymentStatus'] = true;
NEXT: Session::put('ondemand_cart', $ondemand_cart);
NEXT: Session::put('success', 'Payment successful');

LINE: 602
PREV: }
PREV: }
PREV: $payment_method = (@$ondemand_cart['cart_order']['payment_method']) ? $ondemand_cart['cart_order']['payment_method'] : 'cod';
TEXT: return view('providersService.extra_charge.success', ['cart' => $ondemand_cart, 'id' => $user->uuid, 'email' => $email, 'payment_method' => $payment_method]);
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Write code on Method
NEXT: *
NEXT: * @return response()

### FILE: C:\deploy\websitepanel\app\Http\Controllers\PayLaterServiceChargeController.php

- Hits: 10

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use App\Models\User;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Razorpay\Api\Api;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: use Xendit\Configuration;

LINE: 70
PREV: public function payServiceCharge(Request $request)
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $service_charge_cart = Session::get('service_charge_cart');
NEXT: return view('providersService.service_charge.pay_service_charge', ['is_checkout' => 1, 'service_charge_cart' => $service_charge_cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function applyCoupon(Request $request)
NEXT: {

LINE: 72
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
PREV: $service_charge_cart = Session::get('service_charge_cart');
TEXT: return view('providersService.service_charge.pay_service_charge', ['is_checkout' => 1, 'service_charge_cart' => $service_charge_cart, 'id' => $user->uuid, 'errorMessage' => Session::get('payment_error', '')]);
NEXT: }
NEXT: 
NEXT: public function applyCoupon(Request $request)
NEXT: {
NEXT: if ($request->coupon_code) {
NEXT: $service_charge_cart = Session::get('service_charge_cart');

LINE: 185
PREV: public function proccesstopay()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $service_charge_cart = Session::get('service_charge_cart', []);
NEXT: if (@$service_charge_cart['cart_order']) {
NEXT: if ($service_charge_cart['cart_order']['payment_method'] == 'razorpay') {
NEXT: $razorpaySecret = $service_charge_cart['cart_order']['razorpaySecret'];
NEXT: $razorpayKey = $service_charge_cart['cart_order']['razorpayKey'];
NEXT: $authorName = $service_charge_cart['cart_order']['authorName'];

LINE: 194
PREV: $authorName = $service_charge_cart['cart_order']['authorName'];
PREV: $total_pay = $service_charge_cart['cart_order']['total_pay'];
PREV: $formatted_price = $service_charge_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $service_charge_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.service_charge.razorpay', ['is_checkout' => 1, 'cart' => $service_charge_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'cart_order' => $service_charge_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($service_charge_cart['cart_order']['payment_method'] == 'payfast') {
NEXT: 
NEXT: $payfast_merchant_key = $service_charge_cart['cart_order']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $service_charge_cart['cart_order']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $service_charge_cart['cart_order']['payfast_isSandbox'];

LINE: 283
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('providersService.service_charge.flutterwave', ['is_checkout' => 1, 'cart' => $service_charge_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'cart_order' => $service_charge_cart['cart_order'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($service_charge_cart['cart_order']['payment_method'] == 'stripe') {
NEXT: 
NEXT: $stripeKey = $service_charge_cart['cart_order']['stripeKey'];
NEXT: $stripeSecret = $service_charge_cart['cart_order']['stripeSecret'];
NEXT: $authorName = $service_charge_cart['cart_order']['authorName'];

LINE: 302
PREV: $authorName = $service_charge_cart['cart_order']['authorName'];
PREV: $total_pay = $service_charge_cart['cart_order']['total_pay'];
PREV: $formatted_price = $service_charge_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $service_charge_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.service_charge.stripe', ['is_checkout' => 1, 'cart' => $service_charge_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'cart_order' => $service_charge_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: 
NEXT: } else if ($service_charge_cart['cart_order']['payment_method'] == 'paypal') {
NEXT: $paypalKey = $service_charge_cart['cart_order']['paypalKey'];
NEXT: $paypalSecret = $service_charge_cart['cart_order']['paypalSecret'];
NEXT: $authorName = $service_charge_cart['cart_order']['authorName'];
NEXT: $total_pay = $service_charge_cart['cart_order']['total_pay'];

LINE: 320
PREV: $authorName = $service_charge_cart['cart_order']['authorName'];
PREV: $total_pay = $service_charge_cart['cart_order']['total_pay'];
PREV: $formatted_price = $service_charge_cart['cart_order']['currencyData']['symbol'] . number_format($total_pay, $service_charge_cart['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('providersService.service_charge.paypal', ['is_checkout' => 1, 'cart' => $service_charge_cart, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'cart_order' => $service_charge_cart['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($service_charge_cart['cart_order']['payment_method'] == 'mercadopago') {
NEXT: $currency = "USD";
NEXT: if (@$service_charge_cart['cart_order']['currencyData']['code']) {
NEXT: $currency = $service_charge_cart['cart_order']['currencyData']['code'];
NEXT: }
NEXT: $mercadopago_public_key = $service_charge_cart['cart_order']['mercadopago_public_key'];

LINE: 653
PREV: $service_charge_cart = Session::get('service_charge_cart', []);
PREV: $order_json = array();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $service_charge_cart['paymentStatus'] = true;
NEXT: Session::put('service_charge_cart', $service_charge_cart);
NEXT: Session::put('success', 'Payment successful');

LINE: 755
PREV: }
PREV: }
PREV: $payment_method = (@$service_charge_cart['cart_order']['payment_method']) ? $service_charge_cart['cart_order']['payment_method'] : 'cod';
TEXT: return view('providersService.service_charge.success', ['cart' => $service_charge_cart, 'id' => $user->uuid, 'email' => $email, 'payment_method' => $payment_method]);
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Write code on Method
NEXT: *
NEXT: * @return response()

### FILE: C:\deploy\websitepanel\app\Http\Controllers\PaymentController.php

- Hits: 1

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use App\Models\User;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Razorpay\Api\Api;
NEXT: use Session;
NEXT: 
NEXT: class PaymentController extends Controller

### FILE: C:\deploy\websitepanel\app\Http\Controllers\ProductController.php

- Hits: 7

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: 

LINE: 542
PREV: Session::save();
PREV: if (@$req['is_checkout']) {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['is_checkout' => 1, 'id' => $user->uuid, 'cart' => $cart])->render());
NEXT: } else {
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['cart' => $cart])->render());
NEXT: }
NEXT: echo json_encode($res);
NEXT: exit;

LINE: 543
PREV: if (@$req['is_checkout']) {
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
TEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['is_checkout' => 1, 'id' => $user->uuid, 'cart' => $cart])->render());
NEXT: } else {
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['cart' => $cart])->render());
NEXT: }
NEXT: echo json_encode($res);
NEXT: exit;
NEXT: }

LINE: 573
PREV: Session::save();
PREV: if (@$req['is_checkout']) {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['is_checkout' => 1, 'id' => $user->uuid, 'cart' => $cart])->render());
NEXT: } else {
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['cart' => $cart])->render());
NEXT: }
NEXT: 
NEXT: echo json_encode($res);

LINE: 574
PREV: if (@$req['is_checkout']) {
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
TEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['is_checkout' => 1, 'id' => $user->uuid, 'cart' => $cart])->render());
NEXT: } else {
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['cart' => $cart])->render());
NEXT: }
NEXT: 
NEXT: echo json_encode($res);
NEXT: exit;

LINE: 770
PREV: Session::save();
PREV: if (@$req['is_checkout']) {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['is_checkout' => 1, 'id' => $user->uuid, 'cart' => $cart])->render());
NEXT: } else {
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['cart' => $cart])->render());
NEXT: }
NEXT: echo json_encode($res);
NEXT: exit;

LINE: 771
PREV: if (@$req['is_checkout']) {
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
TEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['is_checkout' => 1, 'id' => $user->uuid, 'cart' => $cart])->render());
NEXT: } else {
NEXT: $res = array('status' => true, 'html' => view('vendor.cart_item', ['cart' => $cart])->render());
NEXT: }
NEXT: echo json_encode($res);
NEXT: exit;
NEXT: }

### FILE: C:\deploy\websitepanel\app\Http\Controllers\ProfileController.php

- Hits: 3

LINE: 7
PREV: 
PREV: use Illuminate\Http\Request;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: 
NEXT: class ProfileController extends Controller
NEXT: {
NEXT: /**
NEXT: * Create a new controller instance.
NEXT: *

LINE: 33
PREV: {
PREV: $user = Auth::user();
PREV: $id = Auth::id();
TEXT: $exist = VendorUsers::where('user_id', $id)->first();
NEXT: return view('users.profile')->with('id', $id);
NEXT: }
NEXT: }

LINE: 34
PREV: $user = Auth::user();
PREV: $id = Auth::id();
PREV: $exist = VendorUsers::where('user_id', $id)->first();
TEXT: return view('users.profile')->with('id', $id);
NEXT: }
NEXT: }

### FILE: C:\deploy\websitepanel\app\Http\Controllers\RentalController.php

- Hits: 15

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use App\Models\User;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Razorpay\Api\Api;
NEXT: use Session;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;

LINE: 36
PREV: public function RentalOrdersDetails($id)
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: return view('rental.rental_orders_detail')->with('id', $id)->with('user_id', $user->uuid)->with('errorMessage', Session::get('payment_error', ''));
NEXT: }
NEXT: 
NEXT: public function findRentalCars(Request $request)
NEXT: {
NEXT: Session::put('rentalCarsData', []);

LINE: 37
PREV: {
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
TEXT: return view('rental.rental_orders_detail')->with('id', $id)->with('user_id', $user->uuid)->with('errorMessage', Session::get('payment_error', ''));
NEXT: }
NEXT: 
NEXT: public function findRentalCars(Request $request)
NEXT: {
NEXT: Session::put('rentalCarsData', []);
NEXT: Session::save();

LINE: 68
PREV: public function rentalCarsCheckout()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: if ($user->uuid) {
NEXT: $rentalCarsData = Session::get('rentalCarsData', []);
NEXT: if(isset($rentalCarsData['vehicleTypeId'])){
NEXT: return view('rental.rental_checkout', ['rentalCarsData' => $rentalCarsData, 'user_id' => $user->uuid]);
NEXT: }else{
NEXT: return redirect()->route('home');

LINE: 69
PREV: {
PREV: $email = Auth::user()->email;
PREV: $user = VendorUsers::where('email', $email)->first();
TEXT: if ($user->uuid) {
NEXT: $rentalCarsData = Session::get('rentalCarsData', []);
NEXT: if(isset($rentalCarsData['vehicleTypeId'])){
NEXT: return view('rental.rental_checkout', ['rentalCarsData' => $rentalCarsData, 'user_id' => $user->uuid]);
NEXT: }else{
NEXT: return redirect()->route('home');
NEXT: }

LINE: 72
PREV: if ($user->uuid) {
PREV: $rentalCarsData = Session::get('rentalCarsData', []);
PREV: if(isset($rentalCarsData['vehicleTypeId'])){
TEXT: return view('rental.rental_checkout', ['rentalCarsData' => $rentalCarsData, 'user_id' => $user->uuid]);
NEXT: }else{
NEXT: return redirect()->route('home');
NEXT: }
NEXT: } else {
NEXT: return view('auth.loginuser');
NEXT: }

LINE: 180
PREV: }
PREV: $rentalCarsData = Session::get('rentalCarsData', []);
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $rentalCarsData['payment_status'] = true;
NEXT: Session::put('rentalCarsData', $rentalCarsData);
NEXT: Session::put('success', 'Your payment was successful');

LINE: 274
PREV: }
PREV: }
PREV: $payment_method = (@$rentalCarsData['cart_order']['payment_method']) ? $rentalCarsData['cart_order']['payment_method'] : 'cod';
TEXT: return view('rental.success', ['rentalCarsData' => $rentalCarsData, 'id' => $user->uuid, 'email' => $email, 'payment_method' => $payment_method]);
NEXT: }
NEXT: 
NEXT: public function rentalOrderProccessing(Request $request)
NEXT: {
NEXT: $cart_order = $request->all();
NEXT: $email = Auth::user()->email;

LINE: 281
PREV: {
PREV: $cart_order = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $rental_cart = Session::get('rentalCarsData', []);
NEXT: $rental_cart['cart_order'] = $cart_order;
NEXT: Session::put('rentalCarsData', $rental_cart);
NEXT: Session::save();
NEXT: $res = array('status' => true);
NEXT: echo json_encode($res);

LINE: 294
PREV: public function processRentalOrderPay()
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $rentalCarsData = Session::get('rentalCarsData', []);
NEXT: if (@$rentalCarsData['cart_order']) {
NEXT: if ($rentalCarsData['cart_order']['payment_method'] == 'razorpay') {
NEXT: $razorpaySecret = $rentalCarsData['cart_order']['razorpaySecret'];
NEXT: $razorpayKey = $rentalCarsData['cart_order']['razorpayKey'];
NEXT: $authorName = $rentalCarsData['cart_order']['authorName'];

LINE: 303
PREV: $authorName = $rentalCarsData['cart_order']['authorName'];
PREV: $total_pay = $rentalCarsData['cart_order']['total_pay'];
PREV: $formatted_price = $rentalCarsData['cart_order']['currencyData']['symbol'] . number_format($total_pay, $rentalCarsData['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('rental.razorpay', ['is_checkout' => 1, 'rentalCarsData' => $rentalCarsData, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'cart_order' => $rentalCarsData['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($rentalCarsData['cart_order']['payment_method'] == 'payfast') {
NEXT: $payfast_merchant_key = $rentalCarsData['cart_order']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $rentalCarsData['cart_order']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $rentalCarsData['cart_order']['payfast_isSandbox'];
NEXT: $payfast_return_url = route('rental_success');
NEXT: $payfast_notify_url = route('rental_notify');

LINE: 388
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('rental.flutterwave', ['is_checkout' => 1, 'rentalCarsData' => $rentalCarsData, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'cart_order' => $rentalCarsData['cart_order'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: } else if ($rentalCarsData['cart_order']['payment_method'] == 'mercadopago') {
NEXT: $currency = "USD";
NEXT: if (@$rentalCarsData['cart_order']['currencyData']['code']) {
NEXT: $currency = $rentalCarsData['cart_order']['currencyData']['code'];
NEXT: }
NEXT: $mercadopago_public_key = $rentalCarsData['cart_order']['mercadopago_public_key'];

LINE: 455
PREV: $authorName = $rentalCarsData['cart_order']['authorName'];
PREV: $total_pay = $rentalCarsData['cart_order']['total_pay'];
PREV: $formatted_price = $rentalCarsData['cart_order']['currencyData']['symbol'] . number_format($total_pay, $rentalCarsData['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('rental.stripe', ['is_checkout' => 1, 'rentalCarsData' => $rentalCarsData, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'cart_order' => $rentalCarsData['cart_order'], 'sourceLocationName' => $sourceLocationName, 'formatted_price' => $formatted_price]);
NEXT: } else if ($rentalCarsData['cart_order']['payment_method'] == 'paypal') {
NEXT: $paypalSecret = $rentalCarsData['cart_order']['paypalSecret'];
NEXT: $paypalKey = $rentalCarsData['cart_order']['paypalKey'];
NEXT: $ispaypalSandboxEnabled = $rentalCarsData['cart_order']['ispaypalSandboxEnabled'];
NEXT: $authorName = $rentalCarsData['cart_order']['authorName'];
NEXT: $total_pay = $rentalCarsData['cart_order']['total_pay'];

LINE: 463
PREV: $authorName = $rentalCarsData['cart_order']['authorName'];
PREV: $total_pay = $rentalCarsData['cart_order']['total_pay'];
PREV: $formatted_price = $rentalCarsData['cart_order']['currencyData']['symbol'] . number_format($total_pay, $rentalCarsData['cart_order']['currencyData']['decimal_degits']);
TEXT: return view('rental.paypal', ['is_checkout' => 1, 'rentalCarsData' => $rentalCarsData, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'cart_order' => $rentalCarsData['cart_order'], 'formatted_price' => $formatted_price]);
NEXT: } else if($rentalCarsData['cart_order']['payment_method']=='xendit'){
NEXT: $xendit_enable=$rentalCarsData['cart_order']['xendit_enable'];
NEXT: $xendit_apiKey=$rentalCarsData['cart_order']['xendit_apiKey'];
NEXT: if (isset($xendit_enable) && $xendit_enable == true) {
NEXT: $total_pay = $rentalCarsData['cart_order']['total_pay'];
NEXT: $currency = "IDR";

LINE: 617
PREV: {
PREV: $input = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $rentalCarsData = Session::get('rentalCarsData', []);
NEXT: $api_secret = $rentalCarsData['cart_order']['razorpaySecret'];
NEXT: $api_key = $rentalCarsData['cart_order']['razorpayKey'];
NEXT: $api = new Api($api_key, $api_secret);
NEXT: $payment = $api->payment->fetch($input['razorpay_payment_id']);
NEXT: if (count($input) && !empty($input['razorpay_payment_id'])) {

### FILE: C:\deploy\websitepanel\app\Http\Controllers\TransactionController.php

- Hits: 9

LINE: 6
PREV: namespace App\Http\Controllers;
PREV: 
PREV: use Illuminate\Http\Request;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: use Razorpay\Api\Api;
NEXT: use Xendit\Configuration;
NEXT: use Xendit\Invoice\InvoiceApi;
NEXT: use Xendit\Invoice\CreateInvoiceRequest;

LINE: 31
PREV: public function proccesstopaywallet(Request $request)
PREV: {
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $user_wallet = Session::get('user_wallet', []);
NEXT: if ($user_wallet) {
NEXT: if ($user_wallet['data']['payment_method'] == 'razorpay') {
NEXT: $razorpaySecret = $user_wallet['data']['razorpaySecret'];
NEXT: $razorpayKey = $user_wallet['data']['razorpayKey'];
NEXT: $authorName = $user_wallet['user']['firstName'];

LINE: 40
PREV: $authorName = $user_wallet['user']['firstName'];
PREV: $total_pay = $user_wallet['data']['amount'];
PREV: $formatted_price = $user_wallet['data']['currencyData']['symbol'] . number_format($total_pay, $user_wallet['data']['currencyData']['decimal_degits']);
TEXT: return view('transactions.razorpay', ['is_checkout' => 1, 'user_wallet' => $user_wallet, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'razorpaySecret' => $razorpaySecret, 'razorpayKey' => $razorpayKey, 'formatted_price' => $formatted_price]);
NEXT: } else if ($user_wallet['data']['payment_method'] == 'payfast') {
NEXT: $payfast_merchant_key = $user_wallet['data']['payfast_merchant_key'];
NEXT: $payfast_merchant_id = $user_wallet['data']['payfast_merchant_id'];
NEXT: $payfast_isSandbox = $user_wallet['data']['payfast_isSandbox'];
NEXT: $payfast_return_url = route('wallet-success');
NEXT: $payfast_notify_url = route('wallet-notify');

LINE: 127
PREV: $token = uniqid();
PREV: Session::put('flutterwave_pay_tx_ref', $token);
PREV: Session::save();
TEXT: return view('transactions.flutterwave', ['is_checkout' => 1, 'user_wallet' => $user_wallet, 'id' => $user->uuid, 'email' => $userEmail, 'authorName' => $authorName, 'amount' => $total_pay, 'flutterWave_secret_key' => $flutterWave_secret_key, 'flutterWave_public_key' => $flutterWave_public_key, 'flutterWave_isSandbox' => $flutterWave_isSandbox, 'flutterWave_encryption_key' => $flutterWave_encryption_key, 'token' => $token, 'data' => $user_wallet['data'], 'currency' => $currency, 'formatted_price' => $formatted_price]);
NEXT: } else if ($user_wallet['data']['payment_method'] == 'mercadopago') {
NEXT: $currency = "USD";
NEXT: if (@$user_wallet['data']['currencyData']['code']) {
NEXT: $currency = $user_wallet['data']['currencyData']['code'];
NEXT: }
NEXT: $mercadopago_public_key = $user_wallet['data']['mercadopago_public_key'];

LINE: 179
PREV: $total_pay = $user_wallet['data']['amount'];
PREV: $formatted_price = $user_wallet['data']['currencyData']['symbol'] . number_format($total_pay, $user_wallet['data']['currencyData']['decimal_degits']);
PREV: $isStripeSandboxEnabled = $user_wallet['data']['isStripeSandboxEnabled'];
TEXT: return view('transactions.stripe', ['is_checkout' => 1, 'cart' => $user_wallet, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'stripeSecret' => $stripeSecret, 'stripeKey' => $stripeKey, 'data' => $user_wallet['data'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($user_wallet['data']['payment_method'] == 'paypal') {
NEXT: $paypalSecret = $user_wallet['data']['paypalSecret'];
NEXT: $paypalKey = $user_wallet['data']['paypalKey'];
NEXT: $ispaypalSandboxEnabled = $user_wallet['data']['ispaypalSandboxEnabled'];
NEXT: $authorName = $user_wallet['user']['firstName'];
NEXT: $total_pay = $user_wallet['data']['amount'];

LINE: 187
PREV: $authorName = $user_wallet['user']['firstName'];
PREV: $total_pay = $user_wallet['data']['amount'];
PREV: $formatted_price = $user_wallet['data']['currencyData']['symbol'] . number_format($total_pay, $user_wallet['data']['currencyData']['decimal_degits']);
TEXT: return view('transactions.paypal', ['is_checkout' => 1, 'user_wallet' => $user_wallet, 'id' => $user->uuid, 'email' => $email, 'authorName' => $authorName, 'amount' => $total_pay, 'paypalSecret' => $paypalSecret, 'paypalKey' => $paypalKey, 'data' => $user_wallet['data'], 'formatted_price' => $formatted_price]);
NEXT: } else if ($user_wallet['data']['payment_method'] == 'xendit') {
NEXT: $xendit_enable = $user_wallet['data']['xendit_enable'];
NEXT: $xendit_apiKey = $user_wallet['data']['xendit_apiKey'];
NEXT: if (isset($xendit_enable) && $xendit_enable == true) {
NEXT: $total_pay = $user_wallet['data']['amount'];
NEXT: $currency = "USD";

LINE: 446
PREV: public function razorpaypayment(Request $request) {
PREV: $input = $request->all();
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: $user_wallet = Session::get('user_wallet', []);
NEXT: $api_secret = $user_wallet['data']['razorpaySecret'];
NEXT: $api_key = $user_wallet['data']['razorpayKey'];
NEXT: $api = new Api($api_key, $api_secret);
NEXT: $payment = $api->payment->fetch($input['razorpay_payment_id']);
NEXT: if (count($input) && !empty($input['razorpay_payment_id'])) {

LINE: 478
PREV: }
PREV: $user_wallet = Session::get('user_wallet', []);
PREV: $email = Auth::user()->email;
TEXT: $user = VendorUsers::where('email', $email)->first();
NEXT: 
NEXT: // Xendit payment check
NEXT: if (isset($_GET['xendit_token'])) {
NEXT: $xendit_payment = Session::get('xendit_payment_token');
NEXT: if ($xendit_payment == $_GET['xendit_token']) {
NEXT: $user_wallet['transaction_id'] = $xendit_payment;

LINE: 600
PREV: 
PREV: return view('transactions.success', [
PREV: 'user_wallet' => $user_wallet,
TEXT: 'id' => $user->uuid,
NEXT: 'email' => $email,
NEXT: 'payment_method' => $payment_method
NEXT: ]);
NEXT: }
NEXT: 
NEXT: public function walletProccessing(Request $request) {

### FILE: C:\deploy\websitepanel\app\Http\Controllers\VendorController.php

- Hits: 1

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: 

### FILE: C:\deploy\websitepanel\app\Http\Controllers\Auth\AjaxController.php

- Hits: 23

LINE: 13
PREV: 
PREV: use App\Http\Controllers\Controller;
PREV: use App\Models\User;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Illuminate\Support\Facades\DB;
NEXT: use Illuminate\Support\Facades\Hash;
NEXT: use Laravel\Socialite\Facades\Socialite;
NEXT: use Prettus\Validator\Exceptions\ValidatorException;

LINE: 26
PREV: public function checkEmail(Request $request)
PREV: {
PREV: $response = array();
TEXT: if (User::where('email', $request->email)->exists()) {
NEXT: $response['exist'] = 'yes';
NEXT: } else {
NEXT: $response['exist'] = 'no';
NEXT: }
NEXT: return response()->json($response);
NEXT: }

LINE: 37
PREV: public function setToken(Request $request)
PREV: {
PREV: $userId = $request->userId;
TEXT: $uuid = $request->id;
NEXT: $password = $request->password;
NEXT: $exist = VendorUsers::where('email', $request->email)->get();
NEXT: $data = $exist->isEmpty();
NEXT: if ($exist->isEmpty()) {
NEXT: $user = User::create([
NEXT: 'name' => $request->email,

LINE: 39
PREV: $userId = $request->userId;
PREV: $uuid = $request->id;
PREV: $password = $request->password;
TEXT: $exist = VendorUsers::where('email', $request->email)->get();
NEXT: $data = $exist->isEmpty();
NEXT: if ($exist->isEmpty()) {
NEXT: $user = User::create([
NEXT: 'name' => $request->email,
NEXT: 'email' => $request->email,
NEXT: 'password' => Hash::make($password),

LINE: 42
PREV: $exist = VendorUsers::where('email', $request->email)->get();
PREV: $data = $exist->isEmpty();
PREV: if ($exist->isEmpty()) {
TEXT: $user = User::create([
NEXT: 'name' => $request->email,
NEXT: 'email' => $request->email,
NEXT: 'password' => Hash::make($password),
NEXT: ]);
NEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $user->id,

LINE: 47
PREV: 'email' => $request->email,
PREV: 'password' => Hash::make($password),
PREV: ]);
TEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $user->id,
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: } else {
NEXT: $user = VendorUsers::select('id')->where('email', $request->email)->first();

LINE: 49
PREV: ]);
PREV: DB::table('vendor_users')->insert([
PREV: 'user_id' => $user->id,
TEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: } else {
NEXT: $user = VendorUsers::select('id')->where('email', $request->email)->first();
NEXT: $user = VendorUsers::find($user->id);
NEXT: $user->uuid = $uuid;

LINE: 53
PREV: 'email' => $request->email,
PREV: ]);
PREV: } else {
TEXT: $user = VendorUsers::select('id')->where('email', $request->email)->first();
NEXT: $user = VendorUsers::find($user->id);
NEXT: $user->uuid = $uuid;
NEXT: $user->email = $request->email;
NEXT: $user->save();
NEXT: }
NEXT: $user = User::where('email', $request->email)->first();

LINE: 54
PREV: ]);
PREV: } else {
PREV: $user = VendorUsers::select('id')->where('email', $request->email)->first();
TEXT: $user = VendorUsers::find($user->id);
NEXT: $user->uuid = $uuid;
NEXT: $user->email = $request->email;
NEXT: $user->save();
NEXT: }
NEXT: $user = User::where('email', $request->email)->first();
NEXT: Auth::login($user, true);

LINE: 55
PREV: } else {
PREV: $user = VendorUsers::select('id')->where('email', $request->email)->first();
PREV: $user = VendorUsers::find($user->id);
TEXT: $user->uuid = $uuid;
NEXT: $user->email = $request->email;
NEXT: $user->save();
NEXT: }
NEXT: $user = User::where('email', $request->email)->first();
NEXT: Auth::login($user, true);
NEXT: $data = array();

LINE: 59
PREV: $user->email = $request->email;
PREV: $user->save();
PREV: }
TEXT: $user = User::where('email', $request->email)->first();
NEXT: Auth::login($user, true);
NEXT: $data = array();
NEXT: if (Auth::check()) {
NEXT: $data['access'] = true;
NEXT: }
NEXT: return $data;

LINE: 71
PREV: public function setTokenOLD(Request $request)
PREV: {
PREV: $userId = $request->userId;
TEXT: $uuid = $request->id;
NEXT: $password = $request->password;
NEXT: $exist = VendorUsers::where('user_id', $userId)->get();
NEXT: $data = $exist->isEmpty();
NEXT: if ($exist->isEmpty()) {
NEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $userId,

LINE: 73
PREV: $userId = $request->userId;
PREV: $uuid = $request->id;
PREV: $password = $request->password;
TEXT: $exist = VendorUsers::where('user_id', $userId)->get();
NEXT: $data = $exist->isEmpty();
NEXT: if ($exist->isEmpty()) {
NEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $userId,
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,

LINE: 76
PREV: $exist = VendorUsers::where('user_id', $userId)->get();
PREV: $data = $exist->isEmpty();
PREV: if ($exist->isEmpty()) {
TEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $userId,
NEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: User::create([
NEXT: 'name' => $request->email,

LINE: 78
PREV: if ($exist->isEmpty()) {
PREV: DB::table('vendor_users')->insert([
PREV: 'user_id' => $userId,
TEXT: 'uuid' => $uuid,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: User::create([
NEXT: 'name' => $request->email,
NEXT: 'email' => $request->email,
NEXT: 'password' => Hash::make($password),

LINE: 81
PREV: 'uuid' => $uuid,
PREV: 'email' => $request->email,
PREV: ]);
TEXT: User::create([
NEXT: 'name' => $request->email,
NEXT: 'email' => $request->email,
NEXT: 'password' => Hash::make($password),
NEXT: ]);
NEXT: } else {
NEXT: }

LINE: 88
PREV: ]);
PREV: } else {
PREV: }
TEXT: $user = User::where('email', $request->email)->first();
NEXT: Auth::login($user, true);
NEXT: $data = array();
NEXT: if (Auth::check()) {
NEXT: $data['access'] = true;
NEXT: }
NEXT: return $data;

LINE: 100
PREV: public function logoutOLD(Request $request)
PREV: {
PREV: $user_id = Auth::user()->user_id;
TEXT: $user = VendorUsers::where('user_id', $user_id)->first();
NEXT: try {
NEXT: Auth::logout();
NEXT: return redirect('/login');
NEXT: } catch (\Exception $e) {
NEXT: $this->sendError($e->getMessage(), 401);
NEXT: }

LINE: 117
PREV: public function logout(Request $request)
PREV: {
PREV: $user_id = Auth::user()->user_id;
TEXT: $user = VendorUsers::where('user_id', $user_id)->first();
NEXT: try {
NEXT: Auth::logout();
NEXT: return redirect('/login');
NEXT: } catch (\Exception $e) {
NEXT: $this->sendError($e->getMessage(), 401);
NEXT: }

LINE: 135
PREV: {
PREV: $userId = $request->userId;
PREV: $password = $request->password;
TEXT: $user = User::create([
NEXT: 'name' => $request->email,
NEXT: 'email' => $request->email,
NEXT: 'password' => Hash::make($password),
NEXT: ]);
NEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $user->id,

LINE: 140
PREV: 'email' => $request->email,
PREV: 'password' => Hash::make($password),
PREV: ]);
TEXT: DB::table('vendor_users')->insert([
NEXT: 'user_id' => $user->id,
NEXT: 'uuid' => $userId,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: $user = User::where('email', $request->email)->first();
NEXT: Auth::login($user, true);

LINE: 142
PREV: ]);
PREV: DB::table('vendor_users')->insert([
PREV: 'user_id' => $user->id,
TEXT: 'uuid' => $userId,
NEXT: 'email' => $request->email,
NEXT: ]);
NEXT: $user = User::where('email', $request->email)->first();
NEXT: Auth::login($user, true);
NEXT: $signupdata = array();
NEXT: if (Auth::check()) {

LINE: 145
PREV: 'uuid' => $userId,
PREV: 'email' => $request->email,
PREV: ]);
TEXT: $user = User::where('email', $request->email)->first();
NEXT: Auth::login($user, true);
NEXT: $signupdata = array();
NEXT: if (Auth::check()) {
NEXT: $signupdata['access'] = true;
NEXT: }
NEXT: return $signupdata;

### FILE: C:\deploy\websitepanel\app\Http\Controllers\Auth\ConfirmPasswordController.php

- Hits: 1

LINE: 14
PREV: use ConfirmsPasswords;
PREV: 
PREV: /**
TEXT: * Where to redirect users when the intended url fails.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\websitepanel\app\Http\Controllers\Auth\ForgotPasswordController.php

- Hits: 1

LINE: 17
PREV: |
PREV: | This controller is responsible for handling password reset emails and
PREV: | includes a trait which assists in sending these notifications from
TEXT: | your application to your users. Feel free to explore this trait.
NEXT: |
NEXT: */
NEXT: use SendsPasswordResetEmails;
NEXT: }

### FILE: C:\deploy\websitepanel\app\Http\Controllers\Auth\LoginController.php

- Hits: 4

LINE: 7
PREV: 
PREV: use App\Http\Controllers\Controller;
PREV: use App\Providers\RouteServiceProvider;
TEXT: use Illuminate\Foundation\Auth\AuthenticatesUsers;
NEXT: 
NEXT: class LoginController extends Controller
NEXT: {
NEXT: /*
NEXT: |--------------------------------------------------------------------------
NEXT: | Login Controller

LINE: 16
PREV: | Login Controller
PREV: |--------------------------------------------------------------------------
PREV: |
TEXT: | This controller handles authenticating users for the application and
NEXT: | redirecting them to your home screen. The controller uses a trait
NEXT: | to conveniently provide its functionality to your applications.
NEXT: |
NEXT: */
NEXT: use AuthenticatesUsers;
NEXT: 

LINE: 21
PREV: | to conveniently provide its functionality to your applications.
PREV: |
PREV: */
TEXT: use AuthenticatesUsers;
NEXT: 
NEXT: /**
NEXT: * Where to redirect users after login.
NEXT: *
NEXT: * @var string
NEXT: */

LINE: 24
PREV: use AuthenticatesUsers;
PREV: 
PREV: /**
TEXT: * Where to redirect users after login.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\websitepanel\app\Http\Controllers\Auth\RegisterController.php

- Hits: 6

LINE: 8
PREV: use App\Http\Controllers\Controller;
PREV: use App\Providers\RouteServiceProvider;
PREV: use App\Models\User;
TEXT: use Illuminate\Foundation\Auth\RegistersUsers;
NEXT: use Illuminate\Support\Facades\Hash;
NEXT: use Illuminate\Support\Facades\Validator;
NEXT: 
NEXT: class RegisterController extends Controller
NEXT: {
NEXT: /*

LINE: 19
PREV: | Register Controller
PREV: |--------------------------------------------------------------------------
PREV: |
TEXT: | This controller handles the registration of new users as well as their
NEXT: | validation and creation. By default this controller uses a trait to
NEXT: | provide this functionality without requiring any additional code.
NEXT: |
NEXT: */
NEXT: use RegistersUsers;
NEXT: 

LINE: 24
PREV: | provide this functionality without requiring any additional code.
PREV: |
PREV: */
TEXT: use RegistersUsers;
NEXT: 
NEXT: /**
NEXT: * Where to redirect users after registration.
NEXT: *
NEXT: * @var string
NEXT: */

LINE: 27
PREV: use RegistersUsers;
PREV: 
PREV: /**
TEXT: * Where to redirect users after registration.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

LINE: 53
PREV: {
PREV: return Validator::make($data, [
PREV: 'name' => ['required', 'string', 'max:255'],
TEXT: 'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
NEXT: 'password' => ['required', 'string', 'min:8', 'confirmed'],
NEXT: ]);
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Create a new user instance after a valid registration.

LINE: 66
PREV: */
PREV: protected function create(array $data)
PREV: {
TEXT: return User::create([
NEXT: 'name' => $data['name'],
NEXT: 'email' => $data['email'],
NEXT: 'password' => Hash::make($data['password']),
NEXT: ]);
NEXT: }
NEXT: }

### FILE: C:\deploy\websitepanel\app\Http\Controllers\Auth\ResetPasswordController.php

- Hits: 1

LINE: 24
PREV: use ResetsPasswords;
PREV: 
PREV: /**
TEXT: * Where to redirect users after resetting their password.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: }

### FILE: C:\deploy\websitepanel\app\Http\Controllers\Auth\VerificationController.php

- Hits: 1

LINE: 24
PREV: use VerifiesEmails;
PREV: 
PREV: /**
TEXT: * Where to redirect users after verification.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\websitepanel\app\Models\User.php

- Hits: 5

LINE: 10
PREV: use Illuminate\Foundation\Auth\User as Authenticatable;
PREV: use Illuminate\Notifications\Notifiable;
PREV: use Laravel\Sanctum\HasApiTokens;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: 
NEXT: class User extends Authenticatable
NEXT: {
NEXT: use HasApiTokens, HasFactory, Notifiable;
NEXT: 

LINE: 47
PREV: 
PREV: public function getvendorId()
PREV: {
TEXT: $exist = VendorUsers::where('user_id', Auth::user()->id)->first();
NEXT: if ($exist) {
NEXT: return $exist->uuid;
NEXT: } else {
NEXT: $exist = VendorUsers::where('email', Auth::user()->email)->first();
NEXT: if ($exist) {
NEXT: return $exist->uuid;

LINE: 49
PREV: {
PREV: $exist = VendorUsers::where('user_id', Auth::user()->id)->first();
PREV: if ($exist) {
TEXT: return $exist->uuid;
NEXT: } else {
NEXT: $exist = VendorUsers::where('email', Auth::user()->email)->first();
NEXT: if ($exist) {
NEXT: return $exist->uuid;
NEXT: } else {
NEXT: return null;

LINE: 51
PREV: if ($exist) {
PREV: return $exist->uuid;
PREV: } else {
TEXT: $exist = VendorUsers::where('email', Auth::user()->email)->first();
NEXT: if ($exist) {
NEXT: return $exist->uuid;
NEXT: } else {
NEXT: return null;
NEXT: }
NEXT: }

LINE: 53
PREV: } else {
PREV: $exist = VendorUsers::where('email', Auth::user()->email)->first();
PREV: if ($exist) {
TEXT: return $exist->uuid;
NEXT: } else {
NEXT: return null;
NEXT: }
NEXT: }
NEXT: }
NEXT: }

### FILE: C:\deploy\websitepanel\app\Models\VendorUsers.php

- Hits: 2

LINE: 12
PREV: use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
PREV: use Spatie\Permission\Traits\HasRoles;
PREV: 
TEXT: class VendorUsers extends Authenticatable
NEXT: {
NEXT: public $timestamps = false;
NEXT: public $table = 'vendor_users';
NEXT: }

LINE: 15
PREV: class VendorUsers extends Authenticatable
PREV: {
PREV: public $timestamps = false;
TEXT: public $table = 'vendor_users';
NEXT: }

### FILE: C:\deploy\websitepanel\routes\api.php

- Hits: 1

LINE: 19
PREV: Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
PREV: return $request->user();
PREV: });
TEXT: Route::post('/delete-user', [App\Http\Controllers\ApiController::class, 'deleteUserFromDb'])->name('deleteUserFromDb');

### FILE: C:\deploy\websitepanel\routes\web.php

- Hits: 73

LINE: 53
PREV: Route::get('terms', [CmsController::class, 'termsofuse'])->name('terms');
PREV: Route::get('deliveryofsupport', [CmsController::class, 'deliveryofsupport'])->name('deliveryofsupport');
PREV: Route::get('lang/change', [LangController::class, 'change'])->name('changeLang');
TEXT: Route::post('takeaway', [PaymentController::class, 'takeawayOption'])->name('takeaway');
NEXT: 
NEXT: Route::get('parcel/{id}', [ParcelController::class, 'parcel'])->name('parcel');
NEXT: Route::get('parcel_checkout', [ParcelController::class, 'parcelCheckout'])->name('parcel_checkout');
NEXT: Route::post('parcel_cart', [ParcelController::class, 'parcelCart'])->name('parcel_cart');
NEXT: Route::post('parcel_order_proccessing', [ParcelController::class, 'parcelOrderProccessing'])->name('parcel_order_proccessing');
NEXT: Route::get('process_parcel_order_pay', [ParcelController::class, 'processParcelOrderPay'])->name('process_parcel_order_pay');

LINE: 57
PREV: 
PREV: Route::get('parcel/{id}', [ParcelController::class, 'parcel'])->name('parcel');
PREV: Route::get('parcel_checkout', [ParcelController::class, 'parcelCheckout'])->name('parcel_checkout');
TEXT: Route::post('parcel_cart', [ParcelController::class, 'parcelCart'])->name('parcel_cart');
NEXT: Route::post('parcel_order_proccessing', [ParcelController::class, 'parcelOrderProccessing'])->name('parcel_order_proccessing');
NEXT: Route::get('process_parcel_order_pay', [ParcelController::class, 'processParcelOrderPay'])->name('process_parcel_order_pay');
NEXT: Route::post('parcel_razorpay_payment', [ParcelController::class, 'parcelRazorpayPayment'])->name('parcel_razorpay_payment');
NEXT: Route::get('parcel_success', [ParcelController::class, 'parcelSuccess'])->name('parcel_success');
NEXT: Route::post('process_parcel_stripe', [ParcelController::class, 'processParcelStripePayment'])->name('process_parcel_stripe');
NEXT: Route::post('apply_parcel_coupon', [ParcelController::class, 'applyParcelCoupon'])->name('apply_parcel_coupon');

LINE: 58
PREV: Route::get('parcel/{id}', [ParcelController::class, 'parcel'])->name('parcel');
PREV: Route::get('parcel_checkout', [ParcelController::class, 'parcelCheckout'])->name('parcel_checkout');
PREV: Route::post('parcel_cart', [ParcelController::class, 'parcelCart'])->name('parcel_cart');
TEXT: Route::post('parcel_order_proccessing', [ParcelController::class, 'parcelOrderProccessing'])->name('parcel_order_proccessing');
NEXT: Route::get('process_parcel_order_pay', [ParcelController::class, 'processParcelOrderPay'])->name('process_parcel_order_pay');
NEXT: Route::post('parcel_razorpay_payment', [ParcelController::class, 'parcelRazorpayPayment'])->name('parcel_razorpay_payment');
NEXT: Route::get('parcel_success', [ParcelController::class, 'parcelSuccess'])->name('parcel_success');
NEXT: Route::post('process_parcel_stripe', [ParcelController::class, 'processParcelStripePayment'])->name('process_parcel_stripe');
NEXT: Route::post('apply_parcel_coupon', [ParcelController::class, 'applyParcelCoupon'])->name('apply_parcel_coupon');
NEXT: Route::post('remove_parcel_coupon', [ParcelController::class, 'removeParcelCoupon'])->name('remove_parcel_coupon');

LINE: 60
PREV: Route::post('parcel_cart', [ParcelController::class, 'parcelCart'])->name('parcel_cart');
PREV: Route::post('parcel_order_proccessing', [ParcelController::class, 'parcelOrderProccessing'])->name('parcel_order_proccessing');
PREV: Route::get('process_parcel_order_pay', [ParcelController::class, 'processParcelOrderPay'])->name('process_parcel_order_pay');
TEXT: Route::post('parcel_razorpay_payment', [ParcelController::class, 'parcelRazorpayPayment'])->name('parcel_razorpay_payment');
NEXT: Route::get('parcel_success', [ParcelController::class, 'parcelSuccess'])->name('parcel_success');
NEXT: Route::post('process_parcel_stripe', [ParcelController::class, 'processParcelStripePayment'])->name('process_parcel_stripe');
NEXT: Route::post('apply_parcel_coupon', [ParcelController::class, 'applyParcelCoupon'])->name('apply_parcel_coupon');
NEXT: Route::post('remove_parcel_coupon', [ParcelController::class, 'removeParcelCoupon'])->name('remove_parcel_coupon');
NEXT: Route::post('process_parcel_paypal', [ParcelController::class, 'processParcelPaypalPayment'])->name('process_parcel_paypal');
NEXT: Route::get('parcel_notify', [ParcelController::class, 'parcelNotify'])->name('parcel_notify');

LINE: 62
PREV: Route::get('process_parcel_order_pay', [ParcelController::class, 'processParcelOrderPay'])->name('process_parcel_order_pay');
PREV: Route::post('parcel_razorpay_payment', [ParcelController::class, 'parcelRazorpayPayment'])->name('parcel_razorpay_payment');
PREV: Route::get('parcel_success', [ParcelController::class, 'parcelSuccess'])->name('parcel_success');
TEXT: Route::post('process_parcel_stripe', [ParcelController::class, 'processParcelStripePayment'])->name('process_parcel_stripe');
NEXT: Route::post('apply_parcel_coupon', [ParcelController::class, 'applyParcelCoupon'])->name('apply_parcel_coupon');
NEXT: Route::post('remove_parcel_coupon', [ParcelController::class, 'removeParcelCoupon'])->name('remove_parcel_coupon');
NEXT: Route::post('process_parcel_paypal', [ParcelController::class, 'processParcelPaypalPayment'])->name('process_parcel_paypal');
NEXT: Route::get('parcel_notify', [ParcelController::class, 'parcelNotify'])->name('parcel_notify');
NEXT: Route::post('parcel_order_complete', [ParcelController::class, 'parcelOrderComplete'])->name('parcel_order_complete');
NEXT: Route::get('parcel_orders', [ParcelController::class, 'parcelOrders'])->name('parcel_orders');

LINE: 63
PREV: Route::post('parcel_razorpay_payment', [ParcelController::class, 'parcelRazorpayPayment'])->name('parcel_razorpay_payment');
PREV: Route::get('parcel_success', [ParcelController::class, 'parcelSuccess'])->name('parcel_success');
PREV: Route::post('process_parcel_stripe', [ParcelController::class, 'processParcelStripePayment'])->name('process_parcel_stripe');
TEXT: Route::post('apply_parcel_coupon', [ParcelController::class, 'applyParcelCoupon'])->name('apply_parcel_coupon');
NEXT: Route::post('remove_parcel_coupon', [ParcelController::class, 'removeParcelCoupon'])->name('remove_parcel_coupon');
NEXT: Route::post('process_parcel_paypal', [ParcelController::class, 'processParcelPaypalPayment'])->name('process_parcel_paypal');
NEXT: Route::get('parcel_notify', [ParcelController::class, 'parcelNotify'])->name('parcel_notify');
NEXT: Route::post('parcel_order_complete', [ParcelController::class, 'parcelOrderComplete'])->name('parcel_order_complete');
NEXT: Route::get('parcel_orders', [ParcelController::class, 'parcelOrders'])->name('parcel_orders');
NEXT: 

LINE: 64
PREV: Route::get('parcel_success', [ParcelController::class, 'parcelSuccess'])->name('parcel_success');
PREV: Route::post('process_parcel_stripe', [ParcelController::class, 'processParcelStripePayment'])->name('process_parcel_stripe');
PREV: Route::post('apply_parcel_coupon', [ParcelController::class, 'applyParcelCoupon'])->name('apply_parcel_coupon');
TEXT: Route::post('remove_parcel_coupon', [ParcelController::class, 'removeParcelCoupon'])->name('remove_parcel_coupon');
NEXT: Route::post('process_parcel_paypal', [ParcelController::class, 'processParcelPaypalPayment'])->name('process_parcel_paypal');
NEXT: Route::get('parcel_notify', [ParcelController::class, 'parcelNotify'])->name('parcel_notify');
NEXT: Route::post('parcel_order_complete', [ParcelController::class, 'parcelOrderComplete'])->name('parcel_order_complete');
NEXT: Route::get('parcel_orders', [ParcelController::class, 'parcelOrders'])->name('parcel_orders');
NEXT: 
NEXT: Route::post('find-rental-cars', [RentalController::class, 'findRentalCars'])->name('find_rental_cars');

LINE: 65
PREV: Route::post('process_parcel_stripe', [ParcelController::class, 'processParcelStripePayment'])->name('process_parcel_stripe');
PREV: Route::post('apply_parcel_coupon', [ParcelController::class, 'applyParcelCoupon'])->name('apply_parcel_coupon');
PREV: Route::post('remove_parcel_coupon', [ParcelController::class, 'removeParcelCoupon'])->name('remove_parcel_coupon');
TEXT: Route::post('process_parcel_paypal', [ParcelController::class, 'processParcelPaypalPayment'])->name('process_parcel_paypal');
NEXT: Route::get('parcel_notify', [ParcelController::class, 'parcelNotify'])->name('parcel_notify');
NEXT: Route::post('parcel_order_complete', [ParcelController::class, 'parcelOrderComplete'])->name('parcel_order_complete');
NEXT: Route::get('parcel_orders', [ParcelController::class, 'parcelOrders'])->name('parcel_orders');
NEXT: 
NEXT: Route::post('find-rental-cars', [RentalController::class, 'findRentalCars'])->name('find_rental_cars');
NEXT: Route::get('rental-success', [RentalController::class, 'rentalSuccess'])->name('rental_success');

LINE: 67
PREV: Route::post('remove_parcel_coupon', [ParcelController::class, 'removeParcelCoupon'])->name('remove_parcel_coupon');
PREV: Route::post('process_parcel_paypal', [ParcelController::class, 'processParcelPaypalPayment'])->name('process_parcel_paypal');
PREV: Route::get('parcel_notify', [ParcelController::class, 'parcelNotify'])->name('parcel_notify');
TEXT: Route::post('parcel_order_complete', [ParcelController::class, 'parcelOrderComplete'])->name('parcel_order_complete');
NEXT: Route::get('parcel_orders', [ParcelController::class, 'parcelOrders'])->name('parcel_orders');
NEXT: 
NEXT: Route::post('find-rental-cars', [RentalController::class, 'findRentalCars'])->name('find_rental_cars');
NEXT: Route::get('rental-success', [RentalController::class, 'rentalSuccess'])->name('rental_success');
NEXT: Route::post('rental-order-proccessing', [RentalController::class, 'rentalOrderProccessing'])->name('rental_order_proccessing');
NEXT: Route::get('process-rental-order-pay', [RentalController::class, 'processRentalOrderPay'])->name('process_rental_order_pay');

LINE: 70
PREV: Route::post('parcel_order_complete', [ParcelController::class, 'parcelOrderComplete'])->name('parcel_order_complete');
PREV: Route::get('parcel_orders', [ParcelController::class, 'parcelOrders'])->name('parcel_orders');
PREV: 
TEXT: Route::post('find-rental-cars', [RentalController::class, 'findRentalCars'])->name('find_rental_cars');
NEXT: Route::get('rental-success', [RentalController::class, 'rentalSuccess'])->name('rental_success');
NEXT: Route::post('rental-order-proccessing', [RentalController::class, 'rentalOrderProccessing'])->name('rental_order_proccessing');
NEXT: Route::get('process-rental-order-pay', [RentalController::class, 'processRentalOrderPay'])->name('process_rental_order_pay');
NEXT: Route::post('rental-razorpay-payment', [RentalController::class, 'rentalRazorpayPayment'])->name('rental_razorpay_payment');
NEXT: Route::post('rental-order-complete', [RentalController::class, 'rentalOrderComplete'])->name('rental_order_complete');
NEXT: Route::get('rental-notify', [RentalController::class, 'rentalNotify'])->name('rental_notify');

LINE: 72
PREV: 
PREV: Route::post('find-rental-cars', [RentalController::class, 'findRentalCars'])->name('find_rental_cars');
PREV: Route::get('rental-success', [RentalController::class, 'rentalSuccess'])->name('rental_success');
TEXT: Route::post('rental-order-proccessing', [RentalController::class, 'rentalOrderProccessing'])->name('rental_order_proccessing');
NEXT: Route::get('process-rental-order-pay', [RentalController::class, 'processRentalOrderPay'])->name('process_rental_order_pay');
NEXT: Route::post('rental-razorpay-payment', [RentalController::class, 'rentalRazorpayPayment'])->name('rental_razorpay_payment');
NEXT: Route::post('rental-order-complete', [RentalController::class, 'rentalOrderComplete'])->name('rental_order_complete');
NEXT: Route::get('rental-notify', [RentalController::class, 'rentalNotify'])->name('rental_notify');
NEXT: Route::post('process-rental-stripe', [RentalController::class, 'processRentalStripePayment'])->name('process_rental_stripe');
NEXT: Route::post('process-rental-paypal', [RentalController::class, 'processRentalPaypalPayment'])->name('process_rental_paypal');

LINE: 74
PREV: Route::get('rental-success', [RentalController::class, 'rentalSuccess'])->name('rental_success');
PREV: Route::post('rental-order-proccessing', [RentalController::class, 'rentalOrderProccessing'])->name('rental_order_proccessing');
PREV: Route::get('process-rental-order-pay', [RentalController::class, 'processRentalOrderPay'])->name('process_rental_order_pay');
TEXT: Route::post('rental-razorpay-payment', [RentalController::class, 'rentalRazorpayPayment'])->name('rental_razorpay_payment');
NEXT: Route::post('rental-order-complete', [RentalController::class, 'rentalOrderComplete'])->name('rental_order_complete');
NEXT: Route::get('rental-notify', [RentalController::class, 'rentalNotify'])->name('rental_notify');
NEXT: Route::post('process-rental-stripe', [RentalController::class, 'processRentalStripePayment'])->name('process_rental_stripe');
NEXT: Route::post('process-rental-paypal', [RentalController::class, 'processRentalPaypalPayment'])->name('process_rental_paypal');
NEXT: Route::post('apply-rental-coupon', [RentalController::class, 'applyRentalCoupon'])->name('apply_rental_coupon');
NEXT: Route::post('remove-rental-coupon', [RentalController::class, 'removeRentalCoupon'])->name('remove_rental_coupon');

LINE: 75
PREV: Route::post('rental-order-proccessing', [RentalController::class, 'rentalOrderProccessing'])->name('rental_order_proccessing');
PREV: Route::get('process-rental-order-pay', [RentalController::class, 'processRentalOrderPay'])->name('process_rental_order_pay');
PREV: Route::post('rental-razorpay-payment', [RentalController::class, 'rentalRazorpayPayment'])->name('rental_razorpay_payment');
TEXT: Route::post('rental-order-complete', [RentalController::class, 'rentalOrderComplete'])->name('rental_order_complete');
NEXT: Route::get('rental-notify', [RentalController::class, 'rentalNotify'])->name('rental_notify');
NEXT: Route::post('process-rental-stripe', [RentalController::class, 'processRentalStripePayment'])->name('process_rental_stripe');
NEXT: Route::post('process-rental-paypal', [RentalController::class, 'processRentalPaypalPayment'])->name('process_rental_paypal');
NEXT: Route::post('apply-rental-coupon', [RentalController::class, 'applyRentalCoupon'])->name('apply_rental_coupon');
NEXT: Route::post('remove-rental-coupon', [RentalController::class, 'removeRentalCoupon'])->name('remove_rental_coupon');
NEXT: Route::get('rental-cars-checkout', [RentalController::class, 'rentalCarsCheckout'])->name('rental_cars_checkout');

LINE: 77
PREV: Route::post('rental-razorpay-payment', [RentalController::class, 'rentalRazorpayPayment'])->name('rental_razorpay_payment');
PREV: Route::post('rental-order-complete', [RentalController::class, 'rentalOrderComplete'])->name('rental_order_complete');
PREV: Route::get('rental-notify', [RentalController::class, 'rentalNotify'])->name('rental_notify');
TEXT: Route::post('process-rental-stripe', [RentalController::class, 'processRentalStripePayment'])->name('process_rental_stripe');
NEXT: Route::post('process-rental-paypal', [RentalController::class, 'processRentalPaypalPayment'])->name('process_rental_paypal');
NEXT: Route::post('apply-rental-coupon', [RentalController::class, 'applyRentalCoupon'])->name('apply_rental_coupon');
NEXT: Route::post('remove-rental-coupon', [RentalController::class, 'removeRentalCoupon'])->name('remove_rental_coupon');
NEXT: Route::get('rental-cars-checkout', [RentalController::class, 'rentalCarsCheckout'])->name('rental_cars_checkout');
NEXT: Route::get('rental-orders', [RentalController::class, 'RentalOrders'])->name('rental_orders');
NEXT: Route::get('rental-orders-detail/{id}', [RentalController::class, 'RentalOrdersDetails'])->name('rental_orders_detail');

LINE: 78
PREV: Route::post('rental-order-complete', [RentalController::class, 'rentalOrderComplete'])->name('rental_order_complete');
PREV: Route::get('rental-notify', [RentalController::class, 'rentalNotify'])->name('rental_notify');
PREV: Route::post('process-rental-stripe', [RentalController::class, 'processRentalStripePayment'])->name('process_rental_stripe');
TEXT: Route::post('process-rental-paypal', [RentalController::class, 'processRentalPaypalPayment'])->name('process_rental_paypal');
NEXT: Route::post('apply-rental-coupon', [RentalController::class, 'applyRentalCoupon'])->name('apply_rental_coupon');
NEXT: Route::post('remove-rental-coupon', [RentalController::class, 'removeRentalCoupon'])->name('remove_rental_coupon');
NEXT: Route::get('rental-cars-checkout', [RentalController::class, 'rentalCarsCheckout'])->name('rental_cars_checkout');
NEXT: Route::get('rental-orders', [RentalController::class, 'RentalOrders'])->name('rental_orders');
NEXT: Route::get('rental-orders-detail/{id}', [RentalController::class, 'RentalOrdersDetails'])->name('rental_orders_detail');
NEXT: 

LINE: 79
PREV: Route::get('rental-notify', [RentalController::class, 'rentalNotify'])->name('rental_notify');
PREV: Route::post('process-rental-stripe', [RentalController::class, 'processRentalStripePayment'])->name('process_rental_stripe');
PREV: Route::post('process-rental-paypal', [RentalController::class, 'processRentalPaypalPayment'])->name('process_rental_paypal');
TEXT: Route::post('apply-rental-coupon', [RentalController::class, 'applyRentalCoupon'])->name('apply_rental_coupon');
NEXT: Route::post('remove-rental-coupon', [RentalController::class, 'removeRentalCoupon'])->name('remove_rental_coupon');
NEXT: Route::get('rental-cars-checkout', [RentalController::class, 'rentalCarsCheckout'])->name('rental_cars_checkout');
NEXT: Route::get('rental-orders', [RentalController::class, 'RentalOrders'])->name('rental_orders');
NEXT: Route::get('rental-orders-detail/{id}', [RentalController::class, 'RentalOrdersDetails'])->name('rental_orders_detail');
NEXT: 
NEXT: Route::get('my_order', [OrderController::class, 'index'])->name('my_order');

LINE: 80
PREV: Route::post('process-rental-stripe', [RentalController::class, 'processRentalStripePayment'])->name('process_rental_stripe');
PREV: Route::post('process-rental-paypal', [RentalController::class, 'processRentalPaypalPayment'])->name('process_rental_paypal');
PREV: Route::post('apply-rental-coupon', [RentalController::class, 'applyRentalCoupon'])->name('apply_rental_coupon');
TEXT: Route::post('remove-rental-coupon', [RentalController::class, 'removeRentalCoupon'])->name('remove_rental_coupon');
NEXT: Route::get('rental-cars-checkout', [RentalController::class, 'rentalCarsCheckout'])->name('rental_cars_checkout');
NEXT: Route::get('rental-orders', [RentalController::class, 'RentalOrders'])->name('rental_orders');
NEXT: Route::get('rental-orders-detail/{id}', [RentalController::class, 'RentalOrdersDetails'])->name('rental_orders_detail');
NEXT: 
NEXT: Route::get('my_order', [OrderController::class, 'index'])->name('my_order');
NEXT: Route::get('completed_order', [OrderController::class, 'completedOrders'])->name('completed_order');

LINE: 97
PREV: Route::get('category/{id}', [VendorController::class, 'categoryDetail'])->name('category_detail');
PREV: Route::get('vendor-detail/{id}', [VendorController::class, 'index'])->name('vendor');
PREV: Route::get('cart', [ProductController::class, 'cart'])->name('cart');
TEXT: Route::post('add-to-cart', [ProductController::class, 'addToCart'])->name('add-to-cart');
NEXT: Route::post('reorder-add-to-cart', [ProductController::class, 'reorderaddToCart'])->name('reorder-add-to-cart');
NEXT: Route::post('update-cart', [ProductController::class, 'update'])->name('update-cart');
NEXT: Route::post('remove-from-cart', [ProductController::class, 'remove'])->name('remove-from-cart');
NEXT: Route::post('change-quantity-cart', [ProductController::class, 'changeQuantityCart'])->name('change-quantity-cart');
NEXT: Route::post('apply-coupon', [ProductController::class, 'applyCoupon'])->name('apply-coupon');
NEXT: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');

LINE: 98
PREV: Route::get('vendor-detail/{id}', [VendorController::class, 'index'])->name('vendor');
PREV: Route::get('cart', [ProductController::class, 'cart'])->name('cart');
PREV: Route::post('add-to-cart', [ProductController::class, 'addToCart'])->name('add-to-cart');
TEXT: Route::post('reorder-add-to-cart', [ProductController::class, 'reorderaddToCart'])->name('reorder-add-to-cart');
NEXT: Route::post('update-cart', [ProductController::class, 'update'])->name('update-cart');
NEXT: Route::post('remove-from-cart', [ProductController::class, 'remove'])->name('remove-from-cart');
NEXT: Route::post('change-quantity-cart', [ProductController::class, 'changeQuantityCart'])->name('change-quantity-cart');
NEXT: Route::post('apply-coupon', [ProductController::class, 'applyCoupon'])->name('apply-coupon');
NEXT: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');
NEXT: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');

LINE: 99
PREV: Route::get('cart', [ProductController::class, 'cart'])->name('cart');
PREV: Route::post('add-to-cart', [ProductController::class, 'addToCart'])->name('add-to-cart');
PREV: Route::post('reorder-add-to-cart', [ProductController::class, 'reorderaddToCart'])->name('reorder-add-to-cart');
TEXT: Route::post('update-cart', [ProductController::class, 'update'])->name('update-cart');
NEXT: Route::post('remove-from-cart', [ProductController::class, 'remove'])->name('remove-from-cart');
NEXT: Route::post('change-quantity-cart', [ProductController::class, 'changeQuantityCart'])->name('change-quantity-cart');
NEXT: Route::post('apply-coupon', [ProductController::class, 'applyCoupon'])->name('apply-coupon');
NEXT: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');
NEXT: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');
NEXT: Route::post('order-complete', [ProductController::class, 'orderComplete'])->name('order-complete');

LINE: 100
PREV: Route::post('add-to-cart', [ProductController::class, 'addToCart'])->name('add-to-cart');
PREV: Route::post('reorder-add-to-cart', [ProductController::class, 'reorderaddToCart'])->name('reorder-add-to-cart');
PREV: Route::post('update-cart', [ProductController::class, 'update'])->name('update-cart');
TEXT: Route::post('remove-from-cart', [ProductController::class, 'remove'])->name('remove-from-cart');
NEXT: Route::post('change-quantity-cart', [ProductController::class, 'changeQuantityCart'])->name('change-quantity-cart');
NEXT: Route::post('apply-coupon', [ProductController::class, 'applyCoupon'])->name('apply-coupon');
NEXT: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');
NEXT: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');
NEXT: Route::post('order-complete', [ProductController::class, 'orderComplete'])->name('order-complete');
NEXT: Route::post('order-tip-add', [ProductController::class, 'orderTipAdd'])->name('order-tip-add');

LINE: 101
PREV: Route::post('reorder-add-to-cart', [ProductController::class, 'reorderaddToCart'])->name('reorder-add-to-cart');
PREV: Route::post('update-cart', [ProductController::class, 'update'])->name('update-cart');
PREV: Route::post('remove-from-cart', [ProductController::class, 'remove'])->name('remove-from-cart');
TEXT: Route::post('change-quantity-cart', [ProductController::class, 'changeQuantityCart'])->name('change-quantity-cart');
NEXT: Route::post('apply-coupon', [ProductController::class, 'applyCoupon'])->name('apply-coupon');
NEXT: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');
NEXT: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');
NEXT: Route::post('order-complete', [ProductController::class, 'orderComplete'])->name('order-complete');
NEXT: Route::post('order-tip-add', [ProductController::class, 'orderTipAdd'])->name('order-tip-add');
NEXT: Route::post('order-delivery-option', [ProductController::class, 'orderDeliveryOption'])->name('order-delivery-option');

LINE: 102
PREV: Route::post('update-cart', [ProductController::class, 'update'])->name('update-cart');
PREV: Route::post('remove-from-cart', [ProductController::class, 'remove'])->name('remove-from-cart');
PREV: Route::post('change-quantity-cart', [ProductController::class, 'changeQuantityCart'])->name('change-quantity-cart');
TEXT: Route::post('apply-coupon', [ProductController::class, 'applyCoupon'])->name('apply-coupon');
NEXT: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');
NEXT: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');
NEXT: Route::post('order-complete', [ProductController::class, 'orderComplete'])->name('order-complete');
NEXT: Route::post('order-tip-add', [ProductController::class, 'orderTipAdd'])->name('order-tip-add');
NEXT: Route::post('order-delivery-option', [ProductController::class, 'orderDeliveryOption'])->name('order-delivery-option');
NEXT: Route::get('pay', [CheckoutController::class, 'proccesstopay'])->name('pay');

LINE: 103
PREV: Route::post('remove-from-cart', [ProductController::class, 'remove'])->name('remove-from-cart');
PREV: Route::post('change-quantity-cart', [ProductController::class, 'changeQuantityCart'])->name('change-quantity-cart');
PREV: Route::post('apply-coupon', [ProductController::class, 'applyCoupon'])->name('apply-coupon');
TEXT: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');
NEXT: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');
NEXT: Route::post('order-complete', [ProductController::class, 'orderComplete'])->name('order-complete');
NEXT: Route::post('order-tip-add', [ProductController::class, 'orderTipAdd'])->name('order-tip-add');
NEXT: Route::post('order-delivery-option', [ProductController::class, 'orderDeliveryOption'])->name('order-delivery-option');
NEXT: Route::get('pay', [CheckoutController::class, 'proccesstopay'])->name('pay');
NEXT: Route::post('order-proccessing', [CheckoutController::class, 'orderProccessing'])->name('order-proccessing');

LINE: 105
PREV: Route::post('apply-coupon', [ProductController::class, 'applyCoupon'])->name('apply-coupon');
PREV: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');
PREV: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');
TEXT: Route::post('order-complete', [ProductController::class, 'orderComplete'])->name('order-complete');
NEXT: Route::post('order-tip-add', [ProductController::class, 'orderTipAdd'])->name('order-tip-add');
NEXT: Route::post('order-delivery-option', [ProductController::class, 'orderDeliveryOption'])->name('order-delivery-option');
NEXT: Route::get('pay', [CheckoutController::class, 'proccesstopay'])->name('pay');
NEXT: Route::post('order-proccessing', [CheckoutController::class, 'orderProccessing'])->name('order-proccessing');
NEXT: Route::post('stripepaymentcallback', [PaymentController::class, 'stripePaymentcallback'])->name('stripepaymentcallback');
NEXT: Route::post('process-stripe', [CheckoutController::class, 'processStripePayment'])->name('process-stripe');

LINE: 106
PREV: Route::post('remove-coupon', [ProductController::class, 'removeCoupon'])->name('remove-coupon');
PREV: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');
PREV: Route::post('order-complete', [ProductController::class, 'orderComplete'])->name('order-complete');
TEXT: Route::post('order-tip-add', [ProductController::class, 'orderTipAdd'])->name('order-tip-add');
NEXT: Route::post('order-delivery-option', [ProductController::class, 'orderDeliveryOption'])->name('order-delivery-option');
NEXT: Route::get('pay', [CheckoutController::class, 'proccesstopay'])->name('pay');
NEXT: Route::post('order-proccessing', [CheckoutController::class, 'orderProccessing'])->name('order-proccessing');
NEXT: Route::post('stripepaymentcallback', [PaymentController::class, 'stripePaymentcallback'])->name('stripepaymentcallback');
NEXT: Route::post('process-stripe', [CheckoutController::class, 'processStripePayment'])->name('process-stripe');
NEXT: Route::post('process-paypal', [CheckoutController::class, 'processPaypalPayment'])->name('process-paypal');

LINE: 107
PREV: Route::get('checkout', [CheckoutController::class, 'checkout'])->name('checkout');
PREV: Route::post('order-complete', [ProductController::class, 'orderComplete'])->name('order-complete');
PREV: Route::post('order-tip-add', [ProductController::class, 'orderTipAdd'])->name('order-tip-add');
TEXT: Route::post('order-delivery-option', [ProductController::class, 'orderDeliveryOption'])->name('order-delivery-option');
NEXT: Route::get('pay', [CheckoutController::class, 'proccesstopay'])->name('pay');
NEXT: Route::post('order-proccessing', [CheckoutController::class, 'orderProccessing'])->name('order-proccessing');
NEXT: Route::post('stripepaymentcallback', [PaymentController::class, 'stripePaymentcallback'])->name('stripepaymentcallback');
NEXT: Route::post('process-stripe', [CheckoutController::class, 'processStripePayment'])->name('process-stripe');
NEXT: Route::post('process-paypal', [CheckoutController::class, 'processPaypalPayment'])->name('process-paypal');
NEXT: Route::post('razorpaypayment', [CheckoutController::class, 'razorpaypayment'])->name('razorpaypayment');

LINE: 109
PREV: Route::post('order-tip-add', [ProductController::class, 'orderTipAdd'])->name('order-tip-add');
PREV: Route::post('order-delivery-option', [ProductController::class, 'orderDeliveryOption'])->name('order-delivery-option');
PREV: Route::get('pay', [CheckoutController::class, 'proccesstopay'])->name('pay');
TEXT: Route::post('order-proccessing', [CheckoutController::class, 'orderProccessing'])->name('order-proccessing');
NEXT: Route::post('stripepaymentcallback', [PaymentController::class, 'stripePaymentcallback'])->name('stripepaymentcallback');
NEXT: Route::post('process-stripe', [CheckoutController::class, 'processStripePayment'])->name('process-stripe');
NEXT: Route::post('process-paypal', [CheckoutController::class, 'processPaypalPayment'])->name('process-paypal');
NEXT: Route::post('razorpaypayment', [CheckoutController::class, 'razorpaypayment'])->name('razorpaypayment');
NEXT: Route::get('success', [CheckoutController::class, 'success'])->name('success');
NEXT: Route::get('failed', [CheckoutController::class, 'failed'])->name('failed');

LINE: 110
PREV: Route::post('order-delivery-option', [ProductController::class, 'orderDeliveryOption'])->name('order-delivery-option');
PREV: Route::get('pay', [CheckoutController::class, 'proccesstopay'])->name('pay');
PREV: Route::post('order-proccessing', [CheckoutController::class, 'orderProccessing'])->name('order-proccessing');
TEXT: Route::post('stripepaymentcallback', [PaymentController::class, 'stripePaymentcallback'])->name('stripepaymentcallback');
NEXT: Route::post('process-stripe', [CheckoutController::class, 'processStripePayment'])->name('process-stripe');
NEXT: Route::post('process-paypal', [CheckoutController::class, 'processPaypalPayment'])->name('process-paypal');
NEXT: Route::post('razorpaypayment', [CheckoutController::class, 'razorpaypayment'])->name('razorpaypayment');
NEXT: Route::get('success', [CheckoutController::class, 'success'])->name('success');
NEXT: Route::get('failed', [CheckoutController::class, 'failed'])->name('failed');
NEXT: Route::get('notify', [CheckoutController::class, 'notify'])->name('notify');

LINE: 111
PREV: Route::get('pay', [CheckoutController::class, 'proccesstopay'])->name('pay');
PREV: Route::post('order-proccessing', [CheckoutController::class, 'orderProccessing'])->name('order-proccessing');
PREV: Route::post('stripepaymentcallback', [PaymentController::class, 'stripePaymentcallback'])->name('stripepaymentcallback');
TEXT: Route::post('process-stripe', [CheckoutController::class, 'processStripePayment'])->name('process-stripe');
NEXT: Route::post('process-paypal', [CheckoutController::class, 'processPaypalPayment'])->name('process-paypal');
NEXT: Route::post('razorpaypayment', [CheckoutController::class, 'razorpaypayment'])->name('razorpaypayment');
NEXT: Route::get('success', [CheckoutController::class, 'success'])->name('success');
NEXT: Route::get('failed', [CheckoutController::class, 'failed'])->name('failed');
NEXT: Route::get('notify', [CheckoutController::class, 'notify'])->name('notify');
NEXT: Route::get('transactions', [TransactionController::class, 'index'])->name('transactions');

LINE: 112
PREV: Route::post('order-proccessing', [CheckoutController::class, 'orderProccessing'])->name('order-proccessing');
PREV: Route::post('stripepaymentcallback', [PaymentController::class, 'stripePaymentcallback'])->name('stripepaymentcallback');
PREV: Route::post('process-stripe', [CheckoutController::class, 'processStripePayment'])->name('process-stripe');
TEXT: Route::post('process-paypal', [CheckoutController::class, 'processPaypalPayment'])->name('process-paypal');
NEXT: Route::post('razorpaypayment', [CheckoutController::class, 'razorpaypayment'])->name('razorpaypayment');
NEXT: Route::get('success', [CheckoutController::class, 'success'])->name('success');
NEXT: Route::get('failed', [CheckoutController::class, 'failed'])->name('failed');
NEXT: Route::get('notify', [CheckoutController::class, 'notify'])->name('notify');
NEXT: Route::get('transactions', [TransactionController::class, 'index'])->name('transactions');
NEXT: Route::get('offers', [OffersController::class, 'index'])->name('offers');

LINE: 113
PREV: Route::post('stripepaymentcallback', [PaymentController::class, 'stripePaymentcallback'])->name('stripepaymentcallback');
PREV: Route::post('process-stripe', [CheckoutController::class, 'processStripePayment'])->name('process-stripe');
PREV: Route::post('process-paypal', [CheckoutController::class, 'processPaypalPayment'])->name('process-paypal');
TEXT: Route::post('razorpaypayment', [CheckoutController::class, 'razorpaypayment'])->name('razorpaypayment');
NEXT: Route::get('success', [CheckoutController::class, 'success'])->name('success');
NEXT: Route::get('failed', [CheckoutController::class, 'failed'])->name('failed');
NEXT: Route::get('notify', [CheckoutController::class, 'notify'])->name('notify');
NEXT: Route::get('transactions', [TransactionController::class, 'index'])->name('transactions');
NEXT: Route::get('offers', [OffersController::class, 'index'])->name('offers');
NEXT: Route::get('profile', [ProfileController::class, 'index'])->name('profile');

LINE: 132
PREV: Route::get('product/{id}', [ProductController::class, 'productDetail'])->name('productdetail');
PREV: Route::get('dinein', [DiveinVendorController::class, 'index'])->name('dineinVendors');
PREV: Route::get('dyiningvendor', [DiveinVendorController::class, 'dyiningvendor'])->name('dyiningvendor');
TEXT: Route::post('sendnotification', [VendorController::class, 'sendnotification'])->name('sendnotification');
NEXT: Route::post('setToken', [AjaxController::class, 'setToken'])->name('setToken');
NEXT: Route::post('logout', [AjaxController::class, 'logout'])->name('logout');
NEXT: Route::post('newRegister', [AjaxController::class, 'newRegister'])->name('newRegister');
NEXT: Route::post('checkEmail', [App\Http\Controllers\Auth\AjaxController::class, 'checkEmail'])->name('checkEmail');
NEXT: Route::post('sendemail/send', [SendEmailController::class, 'send'])->name('sendContactUsMail');
NEXT: Route::get('my_order/{id}', [OrderController::class, 'edit'])->name('orderDetails');

LINE: 133
PREV: Route::get('dinein', [DiveinVendorController::class, 'index'])->name('dineinVendors');
PREV: Route::get('dyiningvendor', [DiveinVendorController::class, 'dyiningvendor'])->name('dyiningvendor');
PREV: Route::post('sendnotification', [VendorController::class, 'sendnotification'])->name('sendnotification');
TEXT: Route::post('setToken', [AjaxController::class, 'setToken'])->name('setToken');
NEXT: Route::post('logout', [AjaxController::class, 'logout'])->name('logout');
NEXT: Route::post('newRegister', [AjaxController::class, 'newRegister'])->name('newRegister');
NEXT: Route::post('checkEmail', [App\Http\Controllers\Auth\AjaxController::class, 'checkEmail'])->name('checkEmail');
NEXT: Route::post('sendemail/send', [SendEmailController::class, 'send'])->name('sendContactUsMail');
NEXT: Route::get('my_order/{id}', [OrderController::class, 'edit'])->name('orderDetails');
NEXT: Route::post('add-cart-note', [OrderController::class, 'addCartNote'])->name('add-cart-note');

LINE: 134
PREV: Route::get('dyiningvendor', [DiveinVendorController::class, 'dyiningvendor'])->name('dyiningvendor');
PREV: Route::post('sendnotification', [VendorController::class, 'sendnotification'])->name('sendnotification');
PREV: Route::post('setToken', [AjaxController::class, 'setToken'])->name('setToken');
TEXT: Route::post('logout', [AjaxController::class, 'logout'])->name('logout');
NEXT: Route::post('newRegister', [AjaxController::class, 'newRegister'])->name('newRegister');
NEXT: Route::post('checkEmail', [App\Http\Controllers\Auth\AjaxController::class, 'checkEmail'])->name('checkEmail');
NEXT: Route::post('sendemail/send', [SendEmailController::class, 'send'])->name('sendContactUsMail');
NEXT: Route::get('my_order/{id}', [OrderController::class, 'edit'])->name('orderDetails');
NEXT: Route::post('add-cart-note', [OrderController::class, 'addCartNote'])->name('add-cart-note');
NEXT: Route::get('page/{slug}', [CmsController::class, 'index'])->name('page');

LINE: 135
PREV: Route::post('sendnotification', [VendorController::class, 'sendnotification'])->name('sendnotification');
PREV: Route::post('setToken', [AjaxController::class, 'setToken'])->name('setToken');
PREV: Route::post('logout', [AjaxController::class, 'logout'])->name('logout');
TEXT: Route::post('newRegister', [AjaxController::class, 'newRegister'])->name('newRegister');
NEXT: Route::post('checkEmail', [App\Http\Controllers\Auth\AjaxController::class, 'checkEmail'])->name('checkEmail');
NEXT: Route::post('sendemail/send', [SendEmailController::class, 'send'])->name('sendContactUsMail');
NEXT: Route::get('my_order/{id}', [OrderController::class, 'edit'])->name('orderDetails');
NEXT: Route::post('add-cart-note', [OrderController::class, 'addCartNote'])->name('add-cart-note');
NEXT: Route::get('page/{slug}', [CmsController::class, 'index'])->name('page');
NEXT: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');

LINE: 136
PREV: Route::post('setToken', [AjaxController::class, 'setToken'])->name('setToken');
PREV: Route::post('logout', [AjaxController::class, 'logout'])->name('logout');
PREV: Route::post('newRegister', [AjaxController::class, 'newRegister'])->name('newRegister');
TEXT: Route::post('checkEmail', [App\Http\Controllers\Auth\AjaxController::class, 'checkEmail'])->name('checkEmail');
NEXT: Route::post('sendemail/send', [SendEmailController::class, 'send'])->name('sendContactUsMail');
NEXT: Route::get('my_order/{id}', [OrderController::class, 'edit'])->name('orderDetails');
NEXT: Route::post('add-cart-note', [OrderController::class, 'addCartNote'])->name('add-cart-note');
NEXT: Route::get('page/{slug}', [CmsController::class, 'index'])->name('page');
NEXT: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
NEXT: Route::get('forgot-password', [App\Http\Controllers\LoginController::class, 'forgotPassword'])->name('forgot-password');

LINE: 137
PREV: Route::post('logout', [AjaxController::class, 'logout'])->name('logout');
PREV: Route::post('newRegister', [AjaxController::class, 'newRegister'])->name('newRegister');
PREV: Route::post('checkEmail', [App\Http\Controllers\Auth\AjaxController::class, 'checkEmail'])->name('checkEmail');
TEXT: Route::post('sendemail/send', [SendEmailController::class, 'send'])->name('sendContactUsMail');
NEXT: Route::get('my_order/{id}', [OrderController::class, 'edit'])->name('orderDetails');
NEXT: Route::post('add-cart-note', [OrderController::class, 'addCartNote'])->name('add-cart-note');
NEXT: Route::get('page/{slug}', [CmsController::class, 'index'])->name('page');
NEXT: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
NEXT: Route::get('forgot-password', [App\Http\Controllers\LoginController::class, 'forgotPassword'])->name('forgot-password');
NEXT: Route::post('remove-cart-data', [PaymentController::class, 'removeCartData'])->name('remove-cart-data');

LINE: 139
PREV: Route::post('checkEmail', [App\Http\Controllers\Auth\AjaxController::class, 'checkEmail'])->name('checkEmail');
PREV: Route::post('sendemail/send', [SendEmailController::class, 'send'])->name('sendContactUsMail');
PREV: Route::get('my_order/{id}', [OrderController::class, 'edit'])->name('orderDetails');
TEXT: Route::post('add-cart-note', [OrderController::class, 'addCartNote'])->name('add-cart-note');
NEXT: Route::get('page/{slug}', [CmsController::class, 'index'])->name('page');
NEXT: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
NEXT: Route::get('forgot-password', [App\Http\Controllers\LoginController::class, 'forgotPassword'])->name('forgot-password');
NEXT: Route::post('remove-cart-data', [PaymentController::class, 'removeCartData'])->name('remove-cart-data');
NEXT: Route::get('check-cart-data', [PaymentController::class, 'checkCartData'])->name('check-cart-data');
NEXT: Route::get('buy-gift-card', [App\Http\Controllers\GiftCardController::class, 'index'])->name('customize.giftcard');

LINE: 141
PREV: Route::get('my_order/{id}', [OrderController::class, 'edit'])->name('orderDetails');
PREV: Route::post('add-cart-note', [OrderController::class, 'addCartNote'])->name('add-cart-note');
PREV: Route::get('page/{slug}', [CmsController::class, 'index'])->name('page');
TEXT: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
NEXT: Route::get('forgot-password', [App\Http\Controllers\LoginController::class, 'forgotPassword'])->name('forgot-password');
NEXT: Route::post('remove-cart-data', [PaymentController::class, 'removeCartData'])->name('remove-cart-data');
NEXT: Route::get('check-cart-data', [PaymentController::class, 'checkCartData'])->name('check-cart-data');
NEXT: Route::get('buy-gift-card', [App\Http\Controllers\GiftCardController::class, 'index'])->name('customize.giftcard');
NEXT: Route::post('gift-card-processing', [App\Http\Controllers\GiftCardController::class, 'giftCardProcessing'])->name('giftcard.processing');
NEXT: Route::get('pay-giftcard', [App\Http\Controllers\GiftCardController::class, 'proccesstopay'])->name('giftcard.pay');

LINE: 143
PREV: Route::get('page/{slug}', [CmsController::class, 'index'])->name('page');
PREV: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
PREV: Route::get('forgot-password', [App\Http\Controllers\LoginController::class, 'forgotPassword'])->name('forgot-password');
TEXT: Route::post('remove-cart-data', [PaymentController::class, 'removeCartData'])->name('remove-cart-data');
NEXT: Route::get('check-cart-data', [PaymentController::class, 'checkCartData'])->name('check-cart-data');
NEXT: Route::get('buy-gift-card', [App\Http\Controllers\GiftCardController::class, 'index'])->name('customize.giftcard');
NEXT: Route::post('gift-card-processing', [App\Http\Controllers\GiftCardController::class, 'giftCardProcessing'])->name('giftcard.processing');
NEXT: Route::get('pay-giftcard', [App\Http\Controllers\GiftCardController::class, 'proccesstopay'])->name('giftcard.pay');
NEXT: Route::get('gift-card-success', [App\Http\Controllers\GiftCardController::class, 'success'])->name('giftcard.success');
NEXT: Route::get('giftcards', [App\Http\Controllers\GiftCardController::class, 'giftcards'])->name('giftcards');

LINE: 146
PREV: Route::post('remove-cart-data', [PaymentController::class, 'removeCartData'])->name('remove-cart-data');
PREV: Route::get('check-cart-data', [PaymentController::class, 'checkCartData'])->name('check-cart-data');
PREV: Route::get('buy-gift-card', [App\Http\Controllers\GiftCardController::class, 'index'])->name('customize.giftcard');
TEXT: Route::post('gift-card-processing', [App\Http\Controllers\GiftCardController::class, 'giftCardProcessing'])->name('giftcard.processing');
NEXT: Route::get('pay-giftcard', [App\Http\Controllers\GiftCardController::class, 'proccesstopay'])->name('giftcard.pay');
NEXT: Route::get('gift-card-success', [App\Http\Controllers\GiftCardController::class, 'success'])->name('giftcard.success');
NEXT: Route::get('giftcards', [App\Http\Controllers\GiftCardController::class, 'giftcards'])->name('giftcards');
NEXT: Route::post('giftcard-razorpaypayment', [App\Http\Controllers\GiftCardController::class, 'razorpaypayment'])->name('giftcard.razorpaypayment');
NEXT: Route::post('giftcard-stripepayment', [App\Http\Controllers\GiftCardController::class, 'processStripePayment'])->name('giftcard.stripepayment');
NEXT: Route::post('giftcard-paypalpayment', [App\Http\Controllers\GiftCardController::class, 'processPaypalPayment'])->name('giftcard.paypalpayment');

LINE: 150
PREV: Route::get('pay-giftcard', [App\Http\Controllers\GiftCardController::class, 'proccesstopay'])->name('giftcard.pay');
PREV: Route::get('gift-card-success', [App\Http\Controllers\GiftCardController::class, 'success'])->name('giftcard.success');
PREV: Route::get('giftcards', [App\Http\Controllers\GiftCardController::class, 'giftcards'])->name('giftcards');
TEXT: Route::post('giftcard-razorpaypayment', [App\Http\Controllers\GiftCardController::class, 'razorpaypayment'])->name('giftcard.razorpaypayment');
NEXT: Route::post('giftcard-stripepayment', [App\Http\Controllers\GiftCardController::class, 'processStripePayment'])->name('giftcard.stripepayment');
NEXT: Route::post('giftcard-paypalpayment', [App\Http\Controllers\GiftCardController::class, 'processPaypalPayment'])->name('giftcard.paypalpayment');
NEXT: Route::get('delivery-address', [App\Http\Controllers\DeliveryAddressController::class, 'index'])->name('delivery-address.index');
NEXT: Route::get('service/{id}', [OnDemandController::class, 'index'])->name('service');
NEXT: Route::get('provider/{id}', [OnDemandController::class, 'index'])->name('provider');
NEXT: Route::get('ondemand-categories', [OnDemandController::class, 'categoryList'])->name('ondemand.categorylist');

LINE: 151
PREV: Route::get('gift-card-success', [App\Http\Controllers\GiftCardController::class, 'success'])->name('giftcard.success');
PREV: Route::get('giftcards', [App\Http\Controllers\GiftCardController::class, 'giftcards'])->name('giftcards');
PREV: Route::post('giftcard-razorpaypayment', [App\Http\Controllers\GiftCardController::class, 'razorpaypayment'])->name('giftcard.razorpaypayment');
TEXT: Route::post('giftcard-stripepayment', [App\Http\Controllers\GiftCardController::class, 'processStripePayment'])->name('giftcard.stripepayment');
NEXT: Route::post('giftcard-paypalpayment', [App\Http\Controllers\GiftCardController::class, 'processPaypalPayment'])->name('giftcard.paypalpayment');
NEXT: Route::get('delivery-address', [App\Http\Controllers\DeliveryAddressController::class, 'index'])->name('delivery-address.index');
NEXT: Route::get('service/{id}', [OnDemandController::class, 'index'])->name('service');
NEXT: Route::get('provider/{id}', [OnDemandController::class, 'index'])->name('provider');
NEXT: Route::get('ondemand-categories', [OnDemandController::class, 'categoryList'])->name('ondemand.categorylist');
NEXT: Route::get('ondemand-provider/{id}', [OnDemandController::class, 'providerDetail'])->name('ondemand-providerdetail');

LINE: 152
PREV: Route::get('giftcards', [App\Http\Controllers\GiftCardController::class, 'giftcards'])->name('giftcards');
PREV: Route::post('giftcard-razorpaypayment', [App\Http\Controllers\GiftCardController::class, 'razorpaypayment'])->name('giftcard.razorpaypayment');
PREV: Route::post('giftcard-stripepayment', [App\Http\Controllers\GiftCardController::class, 'processStripePayment'])->name('giftcard.stripepayment');
TEXT: Route::post('giftcard-paypalpayment', [App\Http\Controllers\GiftCardController::class, 'processPaypalPayment'])->name('giftcard.paypalpayment');
NEXT: Route::get('delivery-address', [App\Http\Controllers\DeliveryAddressController::class, 'index'])->name('delivery-address.index');
NEXT: Route::get('service/{id}', [OnDemandController::class, 'index'])->name('service');
NEXT: Route::get('provider/{id}', [OnDemandController::class, 'index'])->name('provider');
NEXT: Route::get('ondemand-categories', [OnDemandController::class, 'categoryList'])->name('ondemand.categorylist');
NEXT: Route::get('ondemand-provider/{id}', [OnDemandController::class, 'providerDetail'])->name('ondemand-providerdetail');
NEXT: Route::get('ondemand-services', [OnDemandController::class, 'servicesList'])->name('ondemand-services');

LINE: 160
PREV: Route::get('ondemand-provider/{id}', [OnDemandController::class, 'providerDetail'])->name('ondemand-providerdetail');
PREV: Route::get('ondemand-services', [OnDemandController::class, 'servicesList'])->name('ondemand-services');
PREV: Route::get('services/category/{id}', [OnDemandController::class, 'servicesByCategory'])->name('ServicebyCategory');
TEXT: Route::post('ondemand-cart', [OnDemandController::class, 'onDemandCart'])->name('ondemand-cart');
NEXT: Route::get('ondemand-checkout', [OnDemandController::class, 'onDemandCheckout'])->name('ondemand-checkout');
NEXT: Route::post('set-extra-charge', [OnDemandController::class, 'setExtraCharge'])->name('set-extra-charge');
NEXT: Route::get('pay-extra-charge', [OnDemandController::class, 'payExtraCharge'])->name('pay-extra-charge');
NEXT: Route::post('set-service-charge', [PayLaterServiceChargeController::class, 'setServiceCharge'])->name('set-service-charge');
NEXT: Route::get('pay-service-charge', [PayLaterServiceChargeController::class, 'payServiceCharge'])->name('pay-service-charge');
NEXT: Route::post('change-service-quantity-cart', [OnDemandController::class, 'changeQuantityCart'])->name('change-service-quantity-cart');

LINE: 162
PREV: Route::get('services/category/{id}', [OnDemandController::class, 'servicesByCategory'])->name('ServicebyCategory');
PREV: Route::post('ondemand-cart', [OnDemandController::class, 'onDemandCart'])->name('ondemand-cart');
PREV: Route::get('ondemand-checkout', [OnDemandController::class, 'onDemandCheckout'])->name('ondemand-checkout');
TEXT: Route::post('set-extra-charge', [OnDemandController::class, 'setExtraCharge'])->name('set-extra-charge');
NEXT: Route::get('pay-extra-charge', [OnDemandController::class, 'payExtraCharge'])->name('pay-extra-charge');
NEXT: Route::post('set-service-charge', [PayLaterServiceChargeController::class, 'setServiceCharge'])->name('set-service-charge');
NEXT: Route::get('pay-service-charge', [PayLaterServiceChargeController::class, 'payServiceCharge'])->name('pay-service-charge');
NEXT: Route::post('change-service-quantity-cart', [OnDemandController::class, 'changeQuantityCart'])->name('change-service-quantity-cart');
NEXT: Route::post('apply-service-coupon', [OnDemandController::class, 'applyCoupon'])->name('apply-service-coupon');
NEXT: Route::post('remove-service-coupon', [OnDemandController::class, 'removeCoupon'])->name('remove-service-coupon');

LINE: 164
PREV: Route::get('ondemand-checkout', [OnDemandController::class, 'onDemandCheckout'])->name('ondemand-checkout');
PREV: Route::post('set-extra-charge', [OnDemandController::class, 'setExtraCharge'])->name('set-extra-charge');
PREV: Route::get('pay-extra-charge', [OnDemandController::class, 'payExtraCharge'])->name('pay-extra-charge');
TEXT: Route::post('set-service-charge', [PayLaterServiceChargeController::class, 'setServiceCharge'])->name('set-service-charge');
NEXT: Route::get('pay-service-charge', [PayLaterServiceChargeController::class, 'payServiceCharge'])->name('pay-service-charge');
NEXT: Route::post('change-service-quantity-cart', [OnDemandController::class, 'changeQuantityCart'])->name('change-service-quantity-cart');
NEXT: Route::post('apply-service-coupon', [OnDemandController::class, 'applyCoupon'])->name('apply-service-coupon');
NEXT: Route::post('remove-service-coupon', [OnDemandController::class, 'removeCoupon'])->name('remove-service-coupon');
NEXT: Route::post('remove-service-from-cart', [OnDemandController::class, 'remove'])->name('remove-service-from-cart');
NEXT: Route::post('service-order-proccessing', [OnDemandCheckoutController::class, 'orderProccessing'])->name('service-order-proccessing');

LINE: 166
PREV: Route::get('pay-extra-charge', [OnDemandController::class, 'payExtraCharge'])->name('pay-extra-charge');
PREV: Route::post('set-service-charge', [PayLaterServiceChargeController::class, 'setServiceCharge'])->name('set-service-charge');
PREV: Route::get('pay-service-charge', [PayLaterServiceChargeController::class, 'payServiceCharge'])->name('pay-service-charge');
TEXT: Route::post('change-service-quantity-cart', [OnDemandController::class, 'changeQuantityCart'])->name('change-service-quantity-cart');
NEXT: Route::post('apply-service-coupon', [OnDemandController::class, 'applyCoupon'])->name('apply-service-coupon');
NEXT: Route::post('remove-service-coupon', [OnDemandController::class, 'removeCoupon'])->name('remove-service-coupon');
NEXT: Route::post('remove-service-from-cart', [OnDemandController::class, 'remove'])->name('remove-service-from-cart');
NEXT: Route::post('service-order-proccessing', [OnDemandCheckoutController::class, 'orderProccessing'])->name('service-order-proccessing');
NEXT: Route::get('omdemand-pay', [OnDemandCheckoutController::class, 'proccesstopay'])->name('ondemand-pay');
NEXT: Route::post('ondemand-razorpay-payment', [OnDemandCheckoutController::class, 'razorpaypayment'])->name('ondemand-razorpay-payment');

LINE: 167
PREV: Route::post('set-service-charge', [PayLaterServiceChargeController::class, 'setServiceCharge'])->name('set-service-charge');
PREV: Route::get('pay-service-charge', [PayLaterServiceChargeController::class, 'payServiceCharge'])->name('pay-service-charge');
PREV: Route::post('change-service-quantity-cart', [OnDemandController::class, 'changeQuantityCart'])->name('change-service-quantity-cart');
TEXT: Route::post('apply-service-coupon', [OnDemandController::class, 'applyCoupon'])->name('apply-service-coupon');
NEXT: Route::post('remove-service-coupon', [OnDemandController::class, 'removeCoupon'])->name('remove-service-coupon');
NEXT: Route::post('remove-service-from-cart', [OnDemandController::class, 'remove'])->name('remove-service-from-cart');
NEXT: Route::post('service-order-proccessing', [OnDemandCheckoutController::class, 'orderProccessing'])->name('service-order-proccessing');
NEXT: Route::get('omdemand-pay', [OnDemandCheckoutController::class, 'proccesstopay'])->name('ondemand-pay');
NEXT: Route::post('ondemand-razorpay-payment', [OnDemandCheckoutController::class, 'razorpaypayment'])->name('ondemand-razorpay-payment');
NEXT: Route::post('ondemand-process-stripe', [OnDemandCheckoutController::class, 'processStripePayment'])->name('ondemand-process-stripe');

LINE: 168
PREV: Route::get('pay-service-charge', [PayLaterServiceChargeController::class, 'payServiceCharge'])->name('pay-service-charge');
PREV: Route::post('change-service-quantity-cart', [OnDemandController::class, 'changeQuantityCart'])->name('change-service-quantity-cart');
PREV: Route::post('apply-service-coupon', [OnDemandController::class, 'applyCoupon'])->name('apply-service-coupon');
TEXT: Route::post('remove-service-coupon', [OnDemandController::class, 'removeCoupon'])->name('remove-service-coupon');
NEXT: Route::post('remove-service-from-cart', [OnDemandController::class, 'remove'])->name('remove-service-from-cart');
NEXT: Route::post('service-order-proccessing', [OnDemandCheckoutController::class, 'orderProccessing'])->name('service-order-proccessing');
NEXT: Route::get('omdemand-pay', [OnDemandCheckoutController::class, 'proccesstopay'])->name('ondemand-pay');
NEXT: Route::post('ondemand-razorpay-payment', [OnDemandCheckoutController::class, 'razorpaypayment'])->name('ondemand-razorpay-payment');
NEXT: Route::post('ondemand-process-stripe', [OnDemandCheckoutController::class, 'processStripePayment'])->name('ondemand-process-stripe');
NEXT: Route::post('ondemand-process-paypal', [OnDemandCheckoutController::class, 'processPaypalPayment'])->name('ondemand-process-paypal');

LINE: 169
PREV: Route::post('change-service-quantity-cart', [OnDemandController::class, 'changeQuantityCart'])->name('change-service-quantity-cart');
PREV: Route::post('apply-service-coupon', [OnDemandController::class, 'applyCoupon'])->name('apply-service-coupon');
PREV: Route::post('remove-service-coupon', [OnDemandController::class, 'removeCoupon'])->name('remove-service-coupon');
TEXT: Route::post('remove-service-from-cart', [OnDemandController::class, 'remove'])->name('remove-service-from-cart');
NEXT: Route::post('service-order-proccessing', [OnDemandCheckoutController::class, 'orderProccessing'])->name('service-order-proccessing');
NEXT: Route::get('omdemand-pay', [OnDemandCheckoutController::class, 'proccesstopay'])->name('ondemand-pay');
NEXT: Route::post('ondemand-razorpay-payment', [OnDemandCheckoutController::class, 'razorpaypayment'])->name('ondemand-razorpay-payment');
NEXT: Route::post('ondemand-process-stripe', [OnDemandCheckoutController::class, 'processStripePayment'])->name('ondemand-process-stripe');
NEXT: Route::post('ondemand-process-paypal', [OnDemandCheckoutController::class, 'processPaypalPayment'])->name('ondemand-process-paypal');
NEXT: Route::get('ondemand-success', [OnDemandCheckoutController::class, 'success'])->name('ondemand-success');

LINE: 170
PREV: Route::post('apply-service-coupon', [OnDemandController::class, 'applyCoupon'])->name('apply-service-coupon');
PREV: Route::post('remove-service-coupon', [OnDemandController::class, 'removeCoupon'])->name('remove-service-coupon');
PREV: Route::post('remove-service-from-cart', [OnDemandController::class, 'remove'])->name('remove-service-from-cart');
TEXT: Route::post('service-order-proccessing', [OnDemandCheckoutController::class, 'orderProccessing'])->name('service-order-proccessing');
NEXT: Route::get('omdemand-pay', [OnDemandCheckoutController::class, 'proccesstopay'])->name('ondemand-pay');
NEXT: Route::post('ondemand-razorpay-payment', [OnDemandCheckoutController::class, 'razorpaypayment'])->name('ondemand-razorpay-payment');
NEXT: Route::post('ondemand-process-stripe', [OnDemandCheckoutController::class, 'processStripePayment'])->name('ondemand-process-stripe');
NEXT: Route::post('ondemand-process-paypal', [OnDemandCheckoutController::class, 'processPaypalPayment'])->name('ondemand-process-paypal');
NEXT: Route::get('ondemand-success', [OnDemandCheckoutController::class, 'success'])->name('ondemand-success');
NEXT: Route::get('ondemand-failed', [OnDemandCheckoutController::class, 'failed'])->name('ondemand-failed');

LINE: 172
PREV: Route::post('remove-service-from-cart', [OnDemandController::class, 'remove'])->name('remove-service-from-cart');
PREV: Route::post('service-order-proccessing', [OnDemandCheckoutController::class, 'orderProccessing'])->name('service-order-proccessing');
PREV: Route::get('omdemand-pay', [OnDemandCheckoutController::class, 'proccesstopay'])->name('ondemand-pay');
TEXT: Route::post('ondemand-razorpay-payment', [OnDemandCheckoutController::class, 'razorpaypayment'])->name('ondemand-razorpay-payment');
NEXT: Route::post('ondemand-process-stripe', [OnDemandCheckoutController::class, 'processStripePayment'])->name('ondemand-process-stripe');
NEXT: Route::post('ondemand-process-paypal', [OnDemandCheckoutController::class, 'processPaypalPayment'])->name('ondemand-process-paypal');
NEXT: Route::get('ondemand-success', [OnDemandCheckoutController::class, 'success'])->name('ondemand-success');
NEXT: Route::get('ondemand-failed', [OnDemandCheckoutController::class, 'failed'])->name('ondemand-failed');
NEXT: Route::post('ondemand-order-complete', [OnDemandCheckoutController::class, 'orderComplete'])->name('ondemand-order-complete');
NEXT: Route::get('my-bookings', [OnDemandOrderController::class, 'index'])->name('my-bookings');

LINE: 173
PREV: Route::post('service-order-proccessing', [OnDemandCheckoutController::class, 'orderProccessing'])->name('service-order-proccessing');
PREV: Route::get('omdemand-pay', [OnDemandCheckoutController::class, 'proccesstopay'])->name('ondemand-pay');
PREV: Route::post('ondemand-razorpay-payment', [OnDemandCheckoutController::class, 'razorpaypayment'])->name('ondemand-razorpay-payment');
TEXT: Route::post('ondemand-process-stripe', [OnDemandCheckoutController::class, 'processStripePayment'])->name('ondemand-process-stripe');
NEXT: Route::post('ondemand-process-paypal', [OnDemandCheckoutController::class, 'processPaypalPayment'])->name('ondemand-process-paypal');
NEXT: Route::get('ondemand-success', [OnDemandCheckoutController::class, 'success'])->name('ondemand-success');
NEXT: Route::get('ondemand-failed', [OnDemandCheckoutController::class, 'failed'])->name('ondemand-failed');
NEXT: Route::post('ondemand-order-complete', [OnDemandCheckoutController::class, 'orderComplete'])->name('ondemand-order-complete');
NEXT: Route::get('my-bookings', [OnDemandOrderController::class, 'index'])->name('my-bookings');
NEXT: Route::get('completed-booking', [OnDemandOrderController::class, 'completedBookings'])->name('completed-booking');

LINE: 174
PREV: Route::get('omdemand-pay', [OnDemandCheckoutController::class, 'proccesstopay'])->name('ondemand-pay');
PREV: Route::post('ondemand-razorpay-payment', [OnDemandCheckoutController::class, 'razorpaypayment'])->name('ondemand-razorpay-payment');
PREV: Route::post('ondemand-process-stripe', [OnDemandCheckoutController::class, 'processStripePayment'])->name('ondemand-process-stripe');
TEXT: Route::post('ondemand-process-paypal', [OnDemandCheckoutController::class, 'processPaypalPayment'])->name('ondemand-process-paypal');
NEXT: Route::get('ondemand-success', [OnDemandCheckoutController::class, 'success'])->name('ondemand-success');
NEXT: Route::get('ondemand-failed', [OnDemandCheckoutController::class, 'failed'])->name('ondemand-failed');
NEXT: Route::post('ondemand-order-complete', [OnDemandCheckoutController::class, 'orderComplete'])->name('ondemand-order-complete');
NEXT: Route::get('my-bookings', [OnDemandOrderController::class, 'index'])->name('my-bookings');
NEXT: Route::get('completed-booking', [OnDemandOrderController::class, 'completedBookings'])->name('completed-booking');
NEXT: Route::get('pending-booking', [OnDemandOrderController::class, 'pendingBookings'])->name('pending-booking');

LINE: 177
PREV: Route::post('ondemand-process-paypal', [OnDemandCheckoutController::class, 'processPaypalPayment'])->name('ondemand-process-paypal');
PREV: Route::get('ondemand-success', [OnDemandCheckoutController::class, 'success'])->name('ondemand-success');
PREV: Route::get('ondemand-failed', [OnDemandCheckoutController::class, 'failed'])->name('ondemand-failed');
TEXT: Route::post('ondemand-order-complete', [OnDemandCheckoutController::class, 'orderComplete'])->name('ondemand-order-complete');
NEXT: Route::get('my-bookings', [OnDemandOrderController::class, 'index'])->name('my-bookings');
NEXT: Route::get('completed-booking', [OnDemandOrderController::class, 'completedBookings'])->name('completed-booking');
NEXT: Route::get('pending-booking', [OnDemandOrderController::class, 'pendingBookings'])->name('pending-booking');
NEXT: Route::get('cancelled-booking', [OnDemandOrderController::class, 'cancelledBookings'])->name('cancelled-booking');
NEXT: Route::get('accepted-booking', [OnDemandOrderController::class, 'acceptedBookings'])->name('accepted-booking');
NEXT: Route::get('ongoing-booking', [OnDemandOrderController::class, 'ongoingBookings'])->name('ongoing-booking');

LINE: 184
PREV: Route::get('cancelled-booking', [OnDemandOrderController::class, 'cancelledBookings'])->name('cancelled-booking');
PREV: Route::get('accepted-booking', [OnDemandOrderController::class, 'acceptedBookings'])->name('accepted-booking');
PREV: Route::get('ongoing-booking', [OnDemandOrderController::class, 'ongoingBookings'])->name('ongoing-booking');
TEXT: Route::post('extra-pay-proccessing', [PayExtraChargeController::class, 'orderProccessing'])->name('extra-pay-proccessing');
NEXT: Route::get('extra-pay', [PayExtraChargeController::class, 'proccesstopay'])->name('extra-pay');
NEXT: Route::get('extra-pay-success', [PayExtraChargeController::class, 'success'])->name('extra-pay-success');
NEXT: Route::get('extra-pay-failed', [PayExtraChargeController::class, 'failed'])->name('extra-pay-failed');
NEXT: Route::post('extra-pay-razorpay', [PayExtraChargeController::class, 'razorpaypayment'])->name('extra-pay-razorpay');
NEXT: Route::post('extra-pay-stripe', [PayExtraChargeController::class, 'processStripePayment'])->name('extra-pay-stripe');
NEXT: Route::post('extra-pay-paypal', [PayExtraChargeController::class, 'processPaypalPayment'])->name('extra-pay-paypal');

LINE: 188
PREV: Route::get('extra-pay', [PayExtraChargeController::class, 'proccesstopay'])->name('extra-pay');
PREV: Route::get('extra-pay-success', [PayExtraChargeController::class, 'success'])->name('extra-pay-success');
PREV: Route::get('extra-pay-failed', [PayExtraChargeController::class, 'failed'])->name('extra-pay-failed');
TEXT: Route::post('extra-pay-razorpay', [PayExtraChargeController::class, 'razorpaypayment'])->name('extra-pay-razorpay');
NEXT: Route::post('extra-pay-stripe', [PayExtraChargeController::class, 'processStripePayment'])->name('extra-pay-stripe');
NEXT: Route::post('extra-pay-paypal', [PayExtraChargeController::class, 'processPaypalPayment'])->name('extra-pay-paypal');
NEXT: Route::get('ondemand-search', [SearchController::class, 'onDemandSearch'])->name('ondemand-search');
NEXT: Route::get('favorite-providers', [FavoritesController::class, 'favProvider'])->name('favorites.provider');
NEXT: Route::get('favorite-services', [FavoritesController::class, 'favService'])->name('favorites.service');
NEXT: Route::post('apply-service-charge-coupon', [PayLaterServiceChargeController::class, 'applyCoupon'])->name('apply-service-charge-coupon');

LINE: 189
PREV: Route::get('extra-pay-success', [PayExtraChargeController::class, 'success'])->name('extra-pay-success');
PREV: Route::get('extra-pay-failed', [PayExtraChargeController::class, 'failed'])->name('extra-pay-failed');
PREV: Route::post('extra-pay-razorpay', [PayExtraChargeController::class, 'razorpaypayment'])->name('extra-pay-razorpay');
TEXT: Route::post('extra-pay-stripe', [PayExtraChargeController::class, 'processStripePayment'])->name('extra-pay-stripe');
NEXT: Route::post('extra-pay-paypal', [PayExtraChargeController::class, 'processPaypalPayment'])->name('extra-pay-paypal');
NEXT: Route::get('ondemand-search', [SearchController::class, 'onDemandSearch'])->name('ondemand-search');
NEXT: Route::get('favorite-providers', [FavoritesController::class, 'favProvider'])->name('favorites.provider');
NEXT: Route::get('favorite-services', [FavoritesController::class, 'favService'])->name('favorites.service');
NEXT: Route::post('apply-service-charge-coupon', [PayLaterServiceChargeController::class, 'applyCoupon'])->name('apply-service-charge-coupon');
NEXT: Route::post('remove-service-charge-coupon', [PayLaterServiceChargeController::class, 'removeCoupon'])->name('remove-service-charge-coupon');

LINE: 190
PREV: Route::get('extra-pay-failed', [PayExtraChargeController::class, 'failed'])->name('extra-pay-failed');
PREV: Route::post('extra-pay-razorpay', [PayExtraChargeController::class, 'razorpaypayment'])->name('extra-pay-razorpay');
PREV: Route::post('extra-pay-stripe', [PayExtraChargeController::class, 'processStripePayment'])->name('extra-pay-stripe');
TEXT: Route::post('extra-pay-paypal', [PayExtraChargeController::class, 'processPaypalPayment'])->name('extra-pay-paypal');
NEXT: Route::get('ondemand-search', [SearchController::class, 'onDemandSearch'])->name('ondemand-search');
NEXT: Route::get('favorite-providers', [FavoritesController::class, 'favProvider'])->name('favorites.provider');
NEXT: Route::get('favorite-services', [FavoritesController::class, 'favService'])->name('favorites.service');
NEXT: Route::post('apply-service-charge-coupon', [PayLaterServiceChargeController::class, 'applyCoupon'])->name('apply-service-charge-coupon');
NEXT: Route::post('remove-service-charge-coupon', [PayLaterServiceChargeController::class, 'removeCoupon'])->name('remove-service-charge-coupon');
NEXT: Route::post('service-charge-proccessing', [PayLaterServiceChargeController::class, 'orderProccessing'])->name('service-charge-proccessing');

LINE: 194
PREV: Route::get('ondemand-search', [SearchController::class, 'onDemandSearch'])->name('ondemand-search');
PREV: Route::get('favorite-providers', [FavoritesController::class, 'favProvider'])->name('favorites.provider');
PREV: Route::get('favorite-services', [FavoritesController::class, 'favService'])->name('favorites.service');
TEXT: Route::post('apply-service-charge-coupon', [PayLaterServiceChargeController::class, 'applyCoupon'])->name('apply-service-charge-coupon');
NEXT: Route::post('remove-service-charge-coupon', [PayLaterServiceChargeController::class, 'removeCoupon'])->name('remove-service-charge-coupon');
NEXT: Route::post('service-charge-proccessing', [PayLaterServiceChargeController::class, 'orderProccessing'])->name('service-charge-proccessing');
NEXT: Route::get('service-charge-pay', [PayLaterServiceChargeController::class, 'proccesstopay'])->name('service-charge-pay');
NEXT: Route::get('service-charge-success', [PayLaterServiceChargeController::class, 'success'])->name('service-charge-success');
NEXT: Route::get('service-charge-failed', [PayLaterServiceChargeController::class, 'failed'])->name('service-charge-failed');
NEXT: Route::post('service-charge-razorpay', [PayLaterServiceChargeController::class, 'razorpaypayment'])->name('service-charge-razorpay');

LINE: 195
PREV: Route::get('favorite-providers', [FavoritesController::class, 'favProvider'])->name('favorites.provider');
PREV: Route::get('favorite-services', [FavoritesController::class, 'favService'])->name('favorites.service');
PREV: Route::post('apply-service-charge-coupon', [PayLaterServiceChargeController::class, 'applyCoupon'])->name('apply-service-charge-coupon');
TEXT: Route::post('remove-service-charge-coupon', [PayLaterServiceChargeController::class, 'removeCoupon'])->name('remove-service-charge-coupon');
NEXT: Route::post('service-charge-proccessing', [PayLaterServiceChargeController::class, 'orderProccessing'])->name('service-charge-proccessing');
NEXT: Route::get('service-charge-pay', [PayLaterServiceChargeController::class, 'proccesstopay'])->name('service-charge-pay');
NEXT: Route::get('service-charge-success', [PayLaterServiceChargeController::class, 'success'])->name('service-charge-success');
NEXT: Route::get('service-charge-failed', [PayLaterServiceChargeController::class, 'failed'])->name('service-charge-failed');
NEXT: Route::post('service-charge-razorpay', [PayLaterServiceChargeController::class, 'razorpaypayment'])->name('service-charge-razorpay');
NEXT: Route::post('service-charge-stripe', [PayLaterServiceChargeController::class, 'processStripePayment'])->name('service-charge-stripe');

LINE: 196
PREV: Route::get('favorite-services', [FavoritesController::class, 'favService'])->name('favorites.service');
PREV: Route::post('apply-service-charge-coupon', [PayLaterServiceChargeController::class, 'applyCoupon'])->name('apply-service-charge-coupon');
PREV: Route::post('remove-service-charge-coupon', [PayLaterServiceChargeController::class, 'removeCoupon'])->name('remove-service-charge-coupon');
TEXT: Route::post('service-charge-proccessing', [PayLaterServiceChargeController::class, 'orderProccessing'])->name('service-charge-proccessing');
NEXT: Route::get('service-charge-pay', [PayLaterServiceChargeController::class, 'proccesstopay'])->name('service-charge-pay');
NEXT: Route::get('service-charge-success', [PayLaterServiceChargeController::class, 'success'])->name('service-charge-success');
NEXT: Route::get('service-charge-failed', [PayLaterServiceChargeController::class, 'failed'])->name('service-charge-failed');
NEXT: Route::post('service-charge-razorpay', [PayLaterServiceChargeController::class, 'razorpaypayment'])->name('service-charge-razorpay');
NEXT: Route::post('service-charge-stripe', [PayLaterServiceChargeController::class, 'processStripePayment'])->name('service-charge-stripe');
NEXT: Route::post('service-charge-paypal', [PayLaterServiceChargeController::class, 'processPaypalPayment'])->name('service-charge-paypal');

LINE: 200
PREV: Route::get('service-charge-pay', [PayLaterServiceChargeController::class, 'proccesstopay'])->name('service-charge-pay');
PREV: Route::get('service-charge-success', [PayLaterServiceChargeController::class, 'success'])->name('service-charge-success');
PREV: Route::get('service-charge-failed', [PayLaterServiceChargeController::class, 'failed'])->name('service-charge-failed');
TEXT: Route::post('service-charge-razorpay', [PayLaterServiceChargeController::class, 'razorpaypayment'])->name('service-charge-razorpay');
NEXT: Route::post('service-charge-stripe', [PayLaterServiceChargeController::class, 'processStripePayment'])->name('service-charge-stripe');
NEXT: Route::post('service-charge-paypal', [PayLaterServiceChargeController::class, 'processPaypalPayment'])->name('service-charge-paypal');
NEXT: Route::post('store-firebase-service', [HomeController::class,'storeServiceFile'])->name('storeServiceFile');
NEXT: 
NEXT: Route::get('pay-wallet', [App\Http\Controllers\TransactionController::class, 'proccesstopaywallet'])->name('pay-wallet');
NEXT: Route::post('wallet-proccessing', [App\Http\Controllers\TransactionController::class, 'walletProccessing'])->name('wallet-proccessing');

LINE: 201
PREV: Route::get('service-charge-success', [PayLaterServiceChargeController::class, 'success'])->name('service-charge-success');
PREV: Route::get('service-charge-failed', [PayLaterServiceChargeController::class, 'failed'])->name('service-charge-failed');
PREV: Route::post('service-charge-razorpay', [PayLaterServiceChargeController::class, 'razorpaypayment'])->name('service-charge-razorpay');
TEXT: Route::post('service-charge-stripe', [PayLaterServiceChargeController::class, 'processStripePayment'])->name('service-charge-stripe');
NEXT: Route::post('service-charge-paypal', [PayLaterServiceChargeController::class, 'processPaypalPayment'])->name('service-charge-paypal');
NEXT: Route::post('store-firebase-service', [HomeController::class,'storeServiceFile'])->name('storeServiceFile');
NEXT: 
NEXT: Route::get('pay-wallet', [App\Http\Controllers\TransactionController::class, 'proccesstopaywallet'])->name('pay-wallet');
NEXT: Route::post('wallet-proccessing', [App\Http\Controllers\TransactionController::class, 'walletProccessing'])->name('wallet-proccessing');
NEXT: Route::post('wallet-process-stripe', [App\Http\Controllers\TransactionController::class, 'processStripePayment'])->name('wallet-process-stripe');

LINE: 202
PREV: Route::get('service-charge-failed', [PayLaterServiceChargeController::class, 'failed'])->name('service-charge-failed');
PREV: Route::post('service-charge-razorpay', [PayLaterServiceChargeController::class, 'razorpaypayment'])->name('service-charge-razorpay');
PREV: Route::post('service-charge-stripe', [PayLaterServiceChargeController::class, 'processStripePayment'])->name('service-charge-stripe');
TEXT: Route::post('service-charge-paypal', [PayLaterServiceChargeController::class, 'processPaypalPayment'])->name('service-charge-paypal');
NEXT: Route::post('store-firebase-service', [HomeController::class,'storeServiceFile'])->name('storeServiceFile');
NEXT: 
NEXT: Route::get('pay-wallet', [App\Http\Controllers\TransactionController::class, 'proccesstopaywallet'])->name('pay-wallet');
NEXT: Route::post('wallet-proccessing', [App\Http\Controllers\TransactionController::class, 'walletProccessing'])->name('wallet-proccessing');
NEXT: Route::post('wallet-process-stripe', [App\Http\Controllers\TransactionController::class, 'processStripePayment'])->name('wallet-process-stripe');
NEXT: Route::post('wallet-process-paypal', [App\Http\Controllers\TransactionController::class, 'processPaypalPayment'])->name('wallet-process-paypal');

LINE: 203
PREV: Route::post('service-charge-razorpay', [PayLaterServiceChargeController::class, 'razorpaypayment'])->name('service-charge-razorpay');
PREV: Route::post('service-charge-stripe', [PayLaterServiceChargeController::class, 'processStripePayment'])->name('service-charge-stripe');
PREV: Route::post('service-charge-paypal', [PayLaterServiceChargeController::class, 'processPaypalPayment'])->name('service-charge-paypal');
TEXT: Route::post('store-firebase-service', [HomeController::class,'storeServiceFile'])->name('storeServiceFile');
NEXT: 
NEXT: Route::get('pay-wallet', [App\Http\Controllers\TransactionController::class, 'proccesstopaywallet'])->name('pay-wallet');
NEXT: Route::post('wallet-proccessing', [App\Http\Controllers\TransactionController::class, 'walletProccessing'])->name('wallet-proccessing');
NEXT: Route::post('wallet-process-stripe', [App\Http\Controllers\TransactionController::class, 'processStripePayment'])->name('wallet-process-stripe');
NEXT: Route::post('wallet-process-paypal', [App\Http\Controllers\TransactionController::class, 'processPaypalPayment'])->name('wallet-process-paypal');
NEXT: Route::post('razorpaywalletpayment', [App\Http\Controllers\TransactionController::class, 'razorpaypayment'])->name('razorpaywalletpayment');

LINE: 206
PREV: Route::post('store-firebase-service', [HomeController::class,'storeServiceFile'])->name('storeServiceFile');
PREV: 
PREV: Route::get('pay-wallet', [App\Http\Controllers\TransactionController::class, 'proccesstopaywallet'])->name('pay-wallet');
TEXT: Route::post('wallet-proccessing', [App\Http\Controllers\TransactionController::class, 'walletProccessing'])->name('wallet-proccessing');
NEXT: Route::post('wallet-process-stripe', [App\Http\Controllers\TransactionController::class, 'processStripePayment'])->name('wallet-process-stripe');
NEXT: Route::post('wallet-process-paypal', [App\Http\Controllers\TransactionController::class, 'processPaypalPayment'])->name('wallet-process-paypal');
NEXT: Route::post('razorpaywalletpayment', [App\Http\Controllers\TransactionController::class, 'razorpaypayment'])->name('razorpaywalletpayment');
NEXT: Route::post('wallet-process-mercadopago', [App\Http\Controllers\TransactionController::class, 'processMercadoPagoPayment'])->name('wallet-process-mercadopago');
NEXT: Route::get('wallet-success', [App\Http\Controllers\TransactionController::class, 'success'])->name('wallet-success');
NEXT: Route::get('wallet-notify', [App\Http\Controllers\TransactionController::class, 'notify'])->name('wallet-notify');

LINE: 207
PREV: 
PREV: Route::get('pay-wallet', [App\Http\Controllers\TransactionController::class, 'proccesstopaywallet'])->name('pay-wallet');
PREV: Route::post('wallet-proccessing', [App\Http\Controllers\TransactionController::class, 'walletProccessing'])->name('wallet-proccessing');
TEXT: Route::post('wallet-process-stripe', [App\Http\Controllers\TransactionController::class, 'processStripePayment'])->name('wallet-process-stripe');
NEXT: Route::post('wallet-process-paypal', [App\Http\Controllers\TransactionController::class, 'processPaypalPayment'])->name('wallet-process-paypal');
NEXT: Route::post('razorpaywalletpayment', [App\Http\Controllers\TransactionController::class, 'razorpaypayment'])->name('razorpaywalletpayment');
NEXT: Route::post('wallet-process-mercadopago', [App\Http\Controllers\TransactionController::class, 'processMercadoPagoPayment'])->name('wallet-process-mercadopago');
NEXT: Route::get('wallet-success', [App\Http\Controllers\TransactionController::class, 'success'])->name('wallet-success');
NEXT: Route::get('wallet-notify', [App\Http\Controllers\TransactionController::class, 'notify'])->name('wallet-notify');

LINE: 208
PREV: Route::get('pay-wallet', [App\Http\Controllers\TransactionController::class, 'proccesstopaywallet'])->name('pay-wallet');
PREV: Route::post('wallet-proccessing', [App\Http\Controllers\TransactionController::class, 'walletProccessing'])->name('wallet-proccessing');
PREV: Route::post('wallet-process-stripe', [App\Http\Controllers\TransactionController::class, 'processStripePayment'])->name('wallet-process-stripe');
TEXT: Route::post('wallet-process-paypal', [App\Http\Controllers\TransactionController::class, 'processPaypalPayment'])->name('wallet-process-paypal');
NEXT: Route::post('razorpaywalletpayment', [App\Http\Controllers\TransactionController::class, 'razorpaypayment'])->name('razorpaywalletpayment');
NEXT: Route::post('wallet-process-mercadopago', [App\Http\Controllers\TransactionController::class, 'processMercadoPagoPayment'])->name('wallet-process-mercadopago');
NEXT: Route::get('wallet-success', [App\Http\Controllers\TransactionController::class, 'success'])->name('wallet-success');
NEXT: Route::get('wallet-notify', [App\Http\Controllers\TransactionController::class, 'notify'])->name('wallet-notify');

LINE: 209
PREV: Route::post('wallet-proccessing', [App\Http\Controllers\TransactionController::class, 'walletProccessing'])->name('wallet-proccessing');
PREV: Route::post('wallet-process-stripe', [App\Http\Controllers\TransactionController::class, 'processStripePayment'])->name('wallet-process-stripe');
PREV: Route::post('wallet-process-paypal', [App\Http\Controllers\TransactionController::class, 'processPaypalPayment'])->name('wallet-process-paypal');
TEXT: Route::post('razorpaywalletpayment', [App\Http\Controllers\TransactionController::class, 'razorpaypayment'])->name('razorpaywalletpayment');
NEXT: Route::post('wallet-process-mercadopago', [App\Http\Controllers\TransactionController::class, 'processMercadoPagoPayment'])->name('wallet-process-mercadopago');
NEXT: Route::get('wallet-success', [App\Http\Controllers\TransactionController::class, 'success'])->name('wallet-success');
NEXT: Route::get('wallet-notify', [App\Http\Controllers\TransactionController::class, 'notify'])->name('wallet-notify');

LINE: 210
PREV: Route::post('wallet-process-stripe', [App\Http\Controllers\TransactionController::class, 'processStripePayment'])->name('wallet-process-stripe');
PREV: Route::post('wallet-process-paypal', [App\Http\Controllers\TransactionController::class, 'processPaypalPayment'])->name('wallet-process-paypal');
PREV: Route::post('razorpaywalletpayment', [App\Http\Controllers\TransactionController::class, 'razorpaypayment'])->name('razorpaywalletpayment');
TEXT: Route::post('wallet-process-mercadopago', [App\Http\Controllers\TransactionController::class, 'processMercadoPagoPayment'])->name('wallet-process-mercadopago');
NEXT: Route::get('wallet-success', [App\Http\Controllers\TransactionController::class, 'success'])->name('wallet-success');
NEXT: Route::get('wallet-notify', [App\Http\Controllers\TransactionController::class, 'notify'])->name('wallet-notify');

## ADMIN_PANEL

- Root: C:\deploy\adminpanel

- Candidate files scanned: 158

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\BookTableController.php

- Hits: 1

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: 
NEXT: class BookTableController extends Controller
NEXT: {

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\NotificationController.php

- Hits: 1

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: 
NEXT: class NotificationController extends Controller
NEXT: {

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\ProductController.php

- Hits: 1

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use App\Models\User;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\RoleController.php

- Hits: 1

LINE: 108
PREV: if ($permissions) {
PREV: $permissions->delete();
PREV: }
TEXT: $user = User::where('role_id', $id);
NEXT: if($user){
NEXT: $user->delete();
NEXT: }
NEXT: $id = json_decode($id);
NEXT: 
NEXT: if (is_array($id)) {

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\UserController.php

- Hits: 28

LINE: 30
PREV: 
PREV: public function index()
PREV: {
TEXT: return view("users.index");
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {
NEXT: return view('users.edit')->with('id', $id);
NEXT: }

LINE: 35
PREV: 
PREV: public function edit($id)
PREV: {
TEXT: return view('users.edit')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function view($id)
NEXT: {
NEXT: return view('users.view')->with('id', $id);
NEXT: }

LINE: 40
PREV: 
PREV: public function view($id)
PREV: {
TEXT: return view('users.view')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function profile()
NEXT: {
NEXT: $user = Auth::user();
NEXT: return view('users.profile', compact(['user']));

LINE: 46
PREV: public function profile()
PREV: {
PREV: $user = Auth::user();
TEXT: return view('users.profile', compact(['user']));
NEXT: }
NEXT: 
NEXT: public function update(Request $request, $id)
NEXT: {
NEXT: $name = $request->input('name');
NEXT: $password = $request->input('password');

LINE: 82
PREV: return Redirect()->back()->with(['message' => $error]);
PREV: }
PREV: 
TEXT: $user = User::find($id);
NEXT: if ($user) {
NEXT: $user->name = $name;
NEXT: $user->email = $email;
NEXT: if ($password != '') {
NEXT: $user->password = Hash::make($password);
NEXT: }

LINE: 97
PREV: 
PREV: public function create()
PREV: {
TEXT: return view('users.create');
NEXT: }
NEXT: 
NEXT: public function adminUsers()
NEXT: {
NEXT: $users = User::join('role', 'role.id', '=', 'users.role_id')
NEXT: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();

LINE: 100
PREV: return view('users.create');
PREV: }
PREV: 
TEXT: public function adminUsers()
NEXT: {
NEXT: $users = User::join('role', 'role.id', '=', 'users.role_id')
NEXT: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();
NEXT: $users->map(function($user) {
NEXT: if(!empty($user->email)){
NEXT: $user->email = $this->shortEmail($user->email);

LINE: 102
PREV: 
PREV: public function adminUsers()
PREV: {
TEXT: $users = User::join('role', 'role.id', '=', 'users.role_id')
NEXT: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();
NEXT: $users->map(function($user) {
NEXT: if(!empty($user->email)){
NEXT: $user->email = $this->shortEmail($user->email);
NEXT: }
NEXT: return $user;

LINE: 103
PREV: public function adminUsers()
PREV: {
PREV: $users = User::join('role', 'role.id', '=', 'users.role_id')
TEXT: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();
NEXT: $users->map(function($user) {
NEXT: if(!empty($user->email)){
NEXT: $user->email = $this->shortEmail($user->email);
NEXT: }
NEXT: return $user;
NEXT: });

LINE: 104
PREV: {
PREV: $users = User::join('role', 'role.id', '=', 'users.role_id')
PREV: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();
TEXT: $users->map(function($user) {
NEXT: if(!empty($user->email)){
NEXT: $user->email = $this->shortEmail($user->email);
NEXT: }
NEXT: return $user;
NEXT: });
NEXT: return view('admin_users.index', compact(['users']));

LINE: 110
PREV: }
PREV: return $user;
PREV: });
TEXT: return view('admin_users.index', compact(['users']));
NEXT: }
NEXT: 
NEXT: public function createAdminUsers()
NEXT: {
NEXT: $roles = Role::all();
NEXT: return view('admin_users.create', compact(['roles']));

LINE: 113
PREV: return view('admin_users.index', compact(['users']));
PREV: }
PREV: 
TEXT: public function createAdminUsers()
NEXT: {
NEXT: $roles = Role::all();
NEXT: return view('admin_users.create', compact(['roles']));
NEXT: 
NEXT: }
NEXT: 

LINE: 116
PREV: public function createAdminUsers()
PREV: {
PREV: $roles = Role::all();
TEXT: return view('admin_users.create', compact(['roles']));
NEXT: 
NEXT: }
NEXT: 
NEXT: public function storeAdminUsers(Request $request)
NEXT: {
NEXT: $name = $request->input('name');

LINE: 120
PREV: 
PREV: }
PREV: 
TEXT: public function storeAdminUsers(Request $request)
NEXT: {
NEXT: $name = $request->input('name');
NEXT: $password = $request->input('password');
NEXT: $email = $request->input('email');
NEXT: $role = $request->input('role');
NEXT: 

LINE: 139
PREV: return Redirect()->back()->with(['message' => $error]);
PREV: }
PREV: 
TEXT: User::create([
NEXT: 'name' => $name,
NEXT: 'email' => $email,
NEXT: 'password' => Hash::make($password),
NEXT: 'role_id' => $role,
NEXT: ]);
NEXT: 

LINE: 146
PREV: 'role_id' => $role,
PREV: ]);
PREV: 
TEXT: return redirect('admin-users');
NEXT: 
NEXT: }
NEXT: 
NEXT: public function editAdminUsers($id)
NEXT: {
NEXT: $user = User::join('role', 'role.id', '=', 'users.role_id')->select('users.*', 'role.role_name as roleName')->find($id);

LINE: 150
PREV: 
PREV: }
PREV: 
TEXT: public function editAdminUsers($id)
NEXT: {
NEXT: $user = User::join('role', 'role.id', '=', 'users.role_id')->select('users.*', 'role.role_name as roleName')->find($id);
NEXT: $roles = Role::all();
NEXT: if (!empty($user['email'])) {
NEXT: $user['email'] = $this->shortEmail($user['email']);
NEXT: }

LINE: 152
PREV: 
PREV: public function editAdminUsers($id)
PREV: {
TEXT: $user = User::join('role', 'role.id', '=', 'users.role_id')->select('users.*', 'role.role_name as roleName')->find($id);
NEXT: $roles = Role::all();
NEXT: if (!empty($user['email'])) {
NEXT: $user['email'] = $this->shortEmail($user['email']);
NEXT: }
NEXT: return view('admin_users.edit', compact(['user', 'roles']));
NEXT: 

LINE: 157
PREV: if (!empty($user['email'])) {
PREV: $user['email'] = $this->shortEmail($user['email']);
PREV: }
TEXT: return view('admin_users.edit', compact(['user', 'roles']));
NEXT: 
NEXT: }
NEXT: 
NEXT: public function updateAdminUsers(Request $request, $id)
NEXT: {
NEXT: $name = $request->input('name');

LINE: 161
PREV: 
PREV: }
PREV: 
TEXT: public function updateAdminUsers(Request $request, $id)
NEXT: {
NEXT: $name = $request->input('name');
NEXT: $password = $request->input('password');
NEXT: $old_password = $request->input('old_password');
NEXT: $email = $request->input('email');
NEXT: $role = ($id == 1) ? 1 : $request->input('role');

LINE: 174
PREV: 'email' => 'required|email'
PREV: ]);
PREV: } else {
TEXT: $user = User::find($id);
NEXT: if (password_verify($old_password, $user->password)) {
NEXT: $validator = Validator::make($request->all(), [
NEXT: 'name' => 'required|max:255',
NEXT: 'password' => 'required|min:8',
NEXT: 'confirm_password' => 'required|same:password',
NEXT: 'email' => 'required|email'

LINE: 194
PREV: return Redirect()->back()->with(['message' => $error]);
PREV: }
PREV: 
TEXT: $user = User::find($id);
NEXT: 
NEXT: if ($user) {
NEXT: 
NEXT: $user->name = $name;
NEXT: $user->email = $email;
NEXT: if ($password != '') {

LINE: 207
PREV: $user->save();
PREV: }
PREV: 
TEXT: return redirect('admin-users');
NEXT: }
NEXT: 
NEXT: public function deleteAdminUsers($id)
NEXT: {
NEXT: $id = json_decode($id);
NEXT: 

LINE: 210
PREV: return redirect('admin-users');
PREV: }
PREV: 
TEXT: public function deleteAdminUsers($id)
NEXT: {
NEXT: $id = json_decode($id);
NEXT: 
NEXT: if (is_array($id)) {
NEXT: 
NEXT: for ($i = 0; $i < count($id); $i++) {

LINE: 217
PREV: if (is_array($id)) {
PREV: 
PREV: for ($i = 0; $i < count($id); $i++) {
TEXT: $users = User::find($id[$i]);
NEXT: $users->delete();
NEXT: }
NEXT: 
NEXT: } else {
NEXT: $user = User::find($id);
NEXT: $user->delete();

LINE: 218
PREV: 
PREV: for ($i = 0; $i < count($id); $i++) {
PREV: $users = User::find($id[$i]);
TEXT: $users->delete();
NEXT: }
NEXT: 
NEXT: } else {
NEXT: $user = User::find($id);
NEXT: $user->delete();
NEXT: }

LINE: 222
PREV: }
PREV: 
PREV: } else {
TEXT: $user = User::find($id);
NEXT: $user->delete();
NEXT: }
NEXT: 
NEXT: return redirect()->back();
NEXT: }
NEXT: 

LINE: 683
PREV: }
PREV: public function userChat($id)
PREV: {
TEXT: return view('users.chat', compact('id'));
NEXT: }
NEXT: }

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\Auth\ConfirmPasswordController.php

- Hits: 1

LINE: 25
PREV: use ConfirmsPasswords;
PREV: 
PREV: /**
TEXT: * Where to redirect users when the intended url fails.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\Auth\ForgotPasswordController.php

- Hits: 1

LINE: 17
PREV: |
PREV: | This controller is responsible for handling password reset emails and
PREV: | includes a trait which assists in sending these notifications from
TEXT: | your application to your users. Feel free to explore this trait.
NEXT: |
NEXT: */
NEXT: 
NEXT: use SendsPasswordResetEmails;
NEXT: }

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\Auth\LoginController.php

- Hits: 4

LINE: 7
PREV: 
PREV: use App\Http\Controllers\Controller;
PREV: use App\Providers\RouteServiceProvider;
TEXT: use Illuminate\Foundation\Auth\AuthenticatesUsers;
NEXT: 
NEXT: class LoginController extends Controller
NEXT: {
NEXT: /*
NEXT: |--------------------------------------------------------------------------
NEXT: | Login Controller

LINE: 16
PREV: | Login Controller
PREV: |--------------------------------------------------------------------------
PREV: |
TEXT: | This controller handles authenticating users for the application and
NEXT: | redirecting them to your home screen. The controller uses a trait
NEXT: | to conveniently provide its functionality to your applications.
NEXT: |
NEXT: */
NEXT: 
NEXT: use AuthenticatesUsers;

LINE: 22
PREV: |
PREV: */
PREV: 
TEXT: use AuthenticatesUsers;
NEXT: 
NEXT: /**
NEXT: * Where to redirect users after login.
NEXT: *
NEXT: * @var string
NEXT: */

LINE: 25
PREV: use AuthenticatesUsers;
PREV: 
PREV: /**
TEXT: * Where to redirect users after login.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\Auth\RegisterController.php

- Hits: 6

LINE: 8
PREV: use App\Http\Controllers\Controller;
PREV: use App\Providers\RouteServiceProvider;
PREV: use App\Models\User;
TEXT: use Illuminate\Foundation\Auth\RegistersUsers;
NEXT: use Illuminate\Support\Facades\Hash;
NEXT: use Illuminate\Support\Facades\Validator;
NEXT: 
NEXT: class RegisterController extends Controller
NEXT: {
NEXT: /*

LINE: 19
PREV: | Register Controller
PREV: |--------------------------------------------------------------------------
PREV: |
TEXT: | This controller handles the registration of new users as well as their
NEXT: | validation and creation. By default this controller uses a trait to
NEXT: | provide this functionality without requiring any additional code.
NEXT: |
NEXT: */
NEXT: 
NEXT: use RegistersUsers;

LINE: 25
PREV: |
PREV: */
PREV: 
TEXT: use RegistersUsers;
NEXT: 
NEXT: /**
NEXT: * Where to redirect users after registration.
NEXT: *
NEXT: * @var string
NEXT: */

LINE: 28
PREV: use RegistersUsers;
PREV: 
PREV: /**
TEXT: * Where to redirect users after registration.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

LINE: 57
PREV: {
PREV: return Validator::make($data, [
PREV: 'name' => ['required', 'string', 'max:255'],
TEXT: 'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
NEXT: 'password' => ['required', 'string', 'min:8', 'confirmed'],
NEXT: ]);
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Create a new user instance after a valid registration.

LINE: 70
PREV: */
PREV: protected function create(array $data)
PREV: {
TEXT: return User::create([
NEXT: 'name' => $data['name'],
NEXT: 'email' => $data['email'],
NEXT: 'password' => Hash::make($data['password']),
NEXT: ]);
NEXT: }
NEXT: }

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\Auth\ResetPasswordController.php

- Hits: 1

LINE: 25
PREV: use ResetsPasswords;
PREV: 
PREV: /**
TEXT: * Where to redirect users after resetting their password.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: }

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Controllers\Auth\VerificationController.php

- Hits: 1

LINE: 25
PREV: use VerifiesEmails;
PREV: 
PREV: /**
TEXT: * Where to redirect users after verification.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\adminpanel\Admin Panel\app\Http\Middleware\CheckUserRoleMiddleware.php

- Hits: 2

LINE: 29
PREV: 
PREV: $role_has_permissions = array_unique($role_has_permissions);
PREV: 
TEXT: $users = User::join('role', 'role.id', '=', 'users.role_id')->where('users.id', '=', $user->id)->select('role.role_name as roleName')->first();
NEXT: 
NEXT: session(['user_role' => $users->roleName, 'user_permissions' => json_encode($role_has_permissions)]);
NEXT: 
NEXT: }
NEXT: return $next($request);
NEXT: }

LINE: 31
PREV: 
PREV: $users = User::join('role', 'role.id', '=', 'users.role_id')->where('users.id', '=', $user->id)->select('role.role_name as roleName')->first();
PREV: 
TEXT: session(['user_role' => $users->roleName, 'user_permissions' => json_encode($role_has_permissions)]);
NEXT: 
NEXT: }
NEXT: return $next($request);
NEXT: }
NEXT: }

### FILE: C:\deploy\adminpanel\Admin Panel\Modules\AI\routes\api.php

- Hits: 6

LINE: 19
PREV: */
PREV: 
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
TEXT: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
NEXT: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
NEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 20
PREV: 
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
TEXT: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
NEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 21
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
TEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 22
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
TEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 23
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
PREV: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
TEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 24
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
PREV: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
PREV: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
TEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

### FILE: C:\deploy\adminpanel\Admin Panel\Modules\AI\routes\web.php

- Hits: 2

LINE: 20
PREV: Route::get('title-auto-fill', [ProductAutoFillController::class, 'titleAutoFill'])->name('title-auto-fill');
PREV: Route::get('description-auto-fill', [ProductAutoFillController::class, 'descriptionAutoFill'])->name('description-auto-fill');
PREV: Route::get('variation-setup-auto-fill', [ProductAutoFillController::class, 'variationSetupAutoFill'])->name('variation-setup-auto-fill');
TEXT: Route::post('analyze-image-auto-fill', [ProductAutoFillController::class, 'analyzeImageAutoFill'])->name('analyze-image-auto-fill');
NEXT: Route::post('generate-title-suggestions', [ProductAutoFillController::class, 'generateTitleSuggestions'])->name('generate-title-suggestions');
NEXT: Route::get('ingredients-auto-fill', [ProductAutoFillController::class, 'ingredientsAutoFill'])->name('ingredients-auto-fill');
NEXT: Route::get('addons-auto-fill', [ProductAutoFillController::class, 'addonsAutoFill'])->name('addons-auto-fill');
NEXT: Route::get('specification-auto-fill', [ProductAutoFillController::class, 'specificationAutoFill'])->name('specification-auto-fill');
NEXT: });

LINE: 21
PREV: Route::get('description-auto-fill', [ProductAutoFillController::class, 'descriptionAutoFill'])->name('description-auto-fill');
PREV: Route::get('variation-setup-auto-fill', [ProductAutoFillController::class, 'variationSetupAutoFill'])->name('variation-setup-auto-fill');
PREV: Route::post('analyze-image-auto-fill', [ProductAutoFillController::class, 'analyzeImageAutoFill'])->name('analyze-image-auto-fill');
TEXT: Route::post('generate-title-suggestions', [ProductAutoFillController::class, 'generateTitleSuggestions'])->name('generate-title-suggestions');
NEXT: Route::get('ingredients-auto-fill', [ProductAutoFillController::class, 'ingredientsAutoFill'])->name('ingredients-auto-fill');
NEXT: Route::get('addons-auto-fill', [ProductAutoFillController::class, 'addonsAutoFill'])->name('addons-auto-fill');
NEXT: Route::get('specification-auto-fill', [ProductAutoFillController::class, 'specificationAutoFill'])->name('specification-auto-fill');
NEXT: });

### FILE: C:\deploy\adminpanel\Admin Panel\routes\web.php

- Hits: 47

LINE: 15
PREV: */
PREV: 
PREV: Route::get('lang/change', [App\Http\Controllers\LangController::class, 'change'])->name('changeLang');
TEXT: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);
NEXT: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);
NEXT: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
NEXT: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
NEXT: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
NEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);

LINE: 16
PREV: 
PREV: Route::get('lang/change', [App\Http\Controllers\LangController::class, 'change'])->name('changeLang');
PREV: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);
TEXT: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);
NEXT: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
NEXT: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
NEXT: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
NEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);

LINE: 17
PREV: Route::get('lang/change', [App\Http\Controllers\LangController::class, 'change'])->name('changeLang');
PREV: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);
PREV: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);
TEXT: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
NEXT: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
NEXT: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
NEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 

LINE: 18
PREV: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);
PREV: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);
PREV: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
TEXT: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
NEXT: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
NEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 
NEXT: Auth::routes();

LINE: 20
PREV: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
PREV: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
PREV: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
TEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 
NEXT: Auth::routes();
NEXT: 
NEXT: Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

LINE: 21
PREV: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
PREV: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
PREV: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
TEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 
NEXT: Auth::routes();
NEXT: 
NEXT: Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
NEXT: Route::get('/dashboard/{id?}/{type?}', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');

LINE: 22
PREV: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
PREV: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
PREV: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
TEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 
NEXT: Auth::routes();
NEXT: 
NEXT: Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
NEXT: Route::get('/dashboard/{id?}/{type?}', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
NEXT: 

LINE: 30
PREV: Route::get('/dashboard/{id?}/{type?}', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
PREV: 
PREV: //customers
TEXT: Route::middleware(['permission:users,users'])->group(function () {
NEXT: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
NEXT: });
NEXT: Route::middleware(['permission:users,users.create'])->group(function () {
NEXT: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
NEXT: });
NEXT: Route::middleware(['permission:users,users.edit'])->group(function () {

LINE: 31
PREV: 
PREV: //customers
PREV: Route::middleware(['permission:users,users'])->group(function () {
TEXT: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
NEXT: });
NEXT: Route::middleware(['permission:users,users.create'])->group(function () {
NEXT: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
NEXT: });
NEXT: Route::middleware(['permission:users,users.edit'])->group(function () {
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');

LINE: 33
PREV: Route::middleware(['permission:users,users'])->group(function () {
PREV: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
PREV: });
TEXT: Route::middleware(['permission:users,users.create'])->group(function () {
NEXT: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
NEXT: });
NEXT: Route::middleware(['permission:users,users.edit'])->group(function () {
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: });
NEXT: Route::middleware(['permission:users,users.view'])->group(function () {

LINE: 34
PREV: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
PREV: });
PREV: Route::middleware(['permission:users,users.create'])->group(function () {
TEXT: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
NEXT: });
NEXT: Route::middleware(['permission:users,users.edit'])->group(function () {
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: });
NEXT: Route::middleware(['permission:users,users.view'])->group(function () {
NEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');

LINE: 36
PREV: Route::middleware(['permission:users,users.create'])->group(function () {
PREV: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
PREV: });
TEXT: Route::middleware(['permission:users,users.edit'])->group(function () {
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: });
NEXT: Route::middleware(['permission:users,users.view'])->group(function () {
NEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
NEXT: });
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');

LINE: 37
PREV: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
PREV: });
PREV: Route::middleware(['permission:users,users.edit'])->group(function () {
TEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: });
NEXT: Route::middleware(['permission:users,users.view'])->group(function () {
NEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
NEXT: });
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
NEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');

LINE: 39
PREV: Route::middleware(['permission:users,users.edit'])->group(function () {
PREV: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
PREV: });
TEXT: Route::middleware(['permission:users,users.view'])->group(function () {
NEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
NEXT: });
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
NEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');
NEXT: 
NEXT: //vendors

LINE: 40
PREV: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
PREV: });
PREV: Route::middleware(['permission:users,users.view'])->group(function () {
TEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
NEXT: });
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
NEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');
NEXT: 
NEXT: //vendors
NEXT: Route::middleware(['permission:vendors,vendors'])->group(function () {

LINE: 42
PREV: Route::middleware(['permission:users,users.view'])->group(function () {
PREV: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
PREV: });
TEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
NEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');
NEXT: 
NEXT: //vendors
NEXT: Route::middleware(['permission:vendors,vendors'])->group(function () {
NEXT: Route::get('/vendors', [App\Http\Controllers\VendorController::class, 'index'])->name('vendors');
NEXT: });

LINE: 43
PREV: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
PREV: });
PREV: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
TEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');
NEXT: 
NEXT: //vendors
NEXT: Route::middleware(['permission:vendors,vendors'])->group(function () {
NEXT: Route::get('/vendors', [App\Http\Controllers\VendorController::class, 'index'])->name('vendors');
NEXT: });
NEXT: Route::middleware(['permission:approve_vendors,approve.vendors.list'])->group(function () {

LINE: 290
PREV: Route::get('walletstransaction', [App\Http\Controllers\TransactionController::class, 'index'])->name('walletstransaction');
PREV: });
PREV: Route::middleware(['permission:wallet-transaction,wallet-transaction'])->group(function () {
TEXT: Route::get('/walletstransaction/{id}', [App\Http\Controllers\TransactionController::class, 'index'])->name('users.walletstransaction');
NEXT: });
NEXT: Route::post('order-status-notification', [App\Http\Controllers\OrderController::class, 'sendNotification'])->name('order-status-notification');
NEXT: 
NEXT: Route::middleware(['permission:god-eye,map'])->group(function () {
NEXT: Route::get('/map/multivendor', [App\Http\Controllers\MapController::class, 'multivendor'])->name('map.multivendor');
NEXT: });

LINE: 292
PREV: Route::middleware(['permission:wallet-transaction,wallet-transaction'])->group(function () {
PREV: Route::get('/walletstransaction/{id}', [App\Http\Controllers\TransactionController::class, 'index'])->name('users.walletstransaction');
PREV: });
TEXT: Route::post('order-status-notification', [App\Http\Controllers\OrderController::class, 'sendNotification'])->name('order-status-notification');
NEXT: 
NEXT: Route::middleware(['permission:god-eye,map'])->group(function () {
NEXT: Route::get('/map/multivendor', [App\Http\Controllers\MapController::class, 'multivendor'])->name('map.multivendor');
NEXT: });
NEXT: Route::middleware(['permission:parcel-service-god-eye,parcel-service-map'])->group(function () {
NEXT: Route::get('/map/parcel', [App\Http\Controllers\MapController::class, 'parcel'])->name('map.parcel');

LINE: 484
PREV: Route::get('/notification', [App\Http\Controllers\NotificationController::class, 'index'])->name('notification');
PREV: });
PREV: 
TEXT: Route::post('broadcastnotification', [App\Http\Controllers\NotificationController::class, 'broadcastnotification'])->name('broadcastnotification');
NEXT: Route::get('/booktable/{id}', [App\Http\Controllers\BookTableController::class, 'index'])->name('vendors.booktable');
NEXT: Route::get('/booktable/edit/{id}', [App\Http\Controllers\BookTableController::class, 'edit'])->name('booktable.edit');
NEXT: Route::post('/sendnotification', [App\Http\Controllers\BookTableController::class, 'sendnotification'])->name('sendnotification');
NEXT: 
NEXT: Route::middleware(['permission:payout-request-driver,payout-request.driver'])->group(function () {
NEXT: Route::get('/payoutRequests/drivers', [App\Http\Controllers\PayoutRequestController::class, 'index'])->name('payoutRequests.drivers');

LINE: 487
PREV: Route::post('broadcastnotification', [App\Http\Controllers\NotificationController::class, 'broadcastnotification'])->name('broadcastnotification');
PREV: Route::get('/booktable/{id}', [App\Http\Controllers\BookTableController::class, 'index'])->name('vendors.booktable');
PREV: Route::get('/booktable/edit/{id}', [App\Http\Controllers\BookTableController::class, 'edit'])->name('booktable.edit');
TEXT: Route::post('/sendnotification', [App\Http\Controllers\BookTableController::class, 'sendnotification'])->name('sendnotification');
NEXT: 
NEXT: Route::middleware(['permission:payout-request-driver,payout-request.driver'])->group(function () {
NEXT: Route::get('/payoutRequests/drivers', [App\Http\Controllers\PayoutRequestController::class, 'index'])->name('payoutRequests.drivers');
NEXT: Route::get('/payoutRequests/drivers/{id}', [App\Http\Controllers\PayoutRequestController::class, 'index'])->name('payoutRequests.drivers.view');
NEXT: });
NEXT: Route::middleware(['permission:payout-request-vendor,payout-request.vendor'])->group(function () {

LINE: 572
PREV: Route::middleware(['permission:footer,footerTemplate'])->group(function () {
PREV: Route::get('footerTemplate', [App\Http\Controllers\SettingsController::class, 'footerTemplate'])->name('footerTemplate');
PREV: });
TEXT: Route::post('complaint_notification', [App\Http\Controllers\RideController::class, 'complaintNotification'])->name('complaint_notification');
NEXT: Route::middleware(['permission:cms,cms'])->group(function () {
NEXT: Route::get('cms', [App\Http\Controllers\CmsController::class, 'index'])->name('cms');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:cms,cms.edit'])->group(function () {
NEXT: Route::get('/cms/edit/{id}', [App\Http\Controllers\CmsController::class, 'edit'])->name('cms.edit');

LINE: 583
PREV: Route::middleware(['permission:cms,cms.create'])->group(function () {
PREV: Route::get('/cms/create', [App\Http\Controllers\CmsController::class, 'create'])->name('cms.create');
PREV: });
TEXT: Route::post('/firebase/config', [App\Http\Controllers\FirebaseController::class, 'config'])->name('firebase.config');
NEXT: Route::middleware(['permission:dynamic-notifications,dynamic-notification.index'])->group(function () {
NEXT: Route::get('dynamic-notification', [App\Http\Controllers\DynamicNotificationController::class, 'index'])->name('dynamic-notification.index');
NEXT: });
NEXT: Route::middleware(['permission:dynamic-notifications,dynamic-notification.save'])->group(function () {
NEXT: Route::get('dynamic-notification/save/{id?}', [App\Http\Controllers\DynamicNotificationController::class, 'save'])->name('dynamic-notification.save');
NEXT: });

LINE: 610
PREV: });
PREV: Route::get('email-templates/delete/{id}', [App\Http\Controllers\SettingsController::class, 'emailTemplatesDelete'])->name('email-templates.delete');
PREV: 
TEXT: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
NEXT: 
NEXT: Route::middleware(['permission:report,' . ((str_contains(Request::url(), 'report/')) ? explode("report/", Request::url())[1] : Request::url())])->group(function () {
NEXT: Route::get('report/{type}', [App\Http\Controllers\ReportController::class, 'index'])->name('report.index');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:gift-cards,gift-card.index'])->group(function () {

LINE: 633
PREV: Route::get('role/save', [App\Http\Controllers\RoleController::class, 'save'])->name('role.save');
PREV: });
PREV: Route::middleware(['permission:roles,role.store'])->group(function () {
TEXT: Route::post('role/store', [App\Http\Controllers\RoleController::class, 'store'])->name('role.store');
NEXT: });
NEXT: Route::middleware(['permission:roles,role.delete'])->group(function () {
NEXT: Route::get('role/delete/{id}', [App\Http\Controllers\RoleController::class, 'delete'])->name('role.delete');
NEXT: });
NEXT: Route::middleware(['permission:roles,role.edit'])->group(function () {
NEXT: Route::get('role/edit/{id}', [App\Http\Controllers\RoleController::class, 'edit'])->name('role.edit');

LINE: 642
PREV: Route::get('role/edit/{id}', [App\Http\Controllers\RoleController::class, 'edit'])->name('role.edit');
PREV: });
PREV: Route::middleware(['permission:roles,role.update'])->group(function () {
TEXT: Route::post('role/update/{id}', [App\Http\Controllers\RoleController::class, 'update'])->name('role.update');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:admins,admin.users'])->group(function () {
NEXT: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.create'])->group(function () {

LINE: 645
PREV: Route::post('role/update/{id}', [App\Http\Controllers\RoleController::class, 'update'])->name('role.update');
PREV: });
PREV: 
TEXT: Route::middleware(['permission:admins,admin.users'])->group(function () {
NEXT: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
NEXT: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {

LINE: 646
PREV: });
PREV: 
PREV: Route::middleware(['permission:admins,admin.users'])->group(function () {
TEXT: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
NEXT: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
NEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');

LINE: 648
PREV: Route::middleware(['permission:admins,admin.users'])->group(function () {
PREV: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
NEXT: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
NEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {

LINE: 649
PREV: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
TEXT: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
NEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
NEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');

LINE: 651
PREV: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
PREV: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
NEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
NEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {

LINE: 652
PREV: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
TEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
NEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
NEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');

LINE: 654
PREV: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
PREV: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
NEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
NEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {

LINE: 655
PREV: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
TEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
NEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
NEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');

LINE: 657
PREV: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
PREV: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
NEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
NEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');
NEXT: });
NEXT: 

LINE: 658
PREV: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
TEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
NEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:ondemand-categories,ondemand.categories'])->group(function () {

LINE: 660
PREV: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
PREV: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
NEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:ondemand-categories,ondemand.categories'])->group(function () {
NEXT: Route::get('/ondemand-categories', [App\Http\Controllers\OnDemandServiceController::class, 'Category'])->name('ondemandcategory');
NEXT: });

LINE: 661
PREV: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
TEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:ondemand-categories,ondemand.categories'])->group(function () {
NEXT: Route::get('/ondemand-categories', [App\Http\Controllers\OnDemandServiceController::class, 'Category'])->name('ondemandcategory');
NEXT: });
NEXT: Route::middleware(['permission:ondemand-categories,ondemand.categories.create'])->group(function () {

LINE: 750
PREV: Route::get('/payoutRequests/providers/{id?}', [App\Http\Controllers\PayoutRequestController::class, 'provider'])->name('payoutRequests.providers');
PREV: });
PREV: 
TEXT: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');
NEXT: Route::post('pay-to-user', [App\Http\Controllers\UserController::class,'payToUser'])->name('pay.user');
NEXT: Route::post('check-payout-status', [App\Http\Controllers\UserController::class,'checkPayoutStatus'])->name('check.payout.status');
NEXT: 
NEXT: Route::middleware(['permission:subscription-plans,subscription-plans'])->group(function () {
NEXT: Route::get('/subscription-plans', [App\Http\Controllers\SubscriptionPlanController::class, 'index'])->name('subscription-plans.index');
NEXT: Route::get('/current-subscriber/{id}', [App\Http\Controllers\SubscriptionPlanController::class, 'currentSubscriberList'])->name('current-subscriber.list');

LINE: 751
PREV: });
PREV: 
PREV: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');
TEXT: Route::post('pay-to-user', [App\Http\Controllers\UserController::class,'payToUser'])->name('pay.user');
NEXT: Route::post('check-payout-status', [App\Http\Controllers\UserController::class,'checkPayoutStatus'])->name('check.payout.status');
NEXT: 
NEXT: Route::middleware(['permission:subscription-plans,subscription-plans'])->group(function () {
NEXT: Route::get('/subscription-plans', [App\Http\Controllers\SubscriptionPlanController::class, 'index'])->name('subscription-plans.index');
NEXT: Route::get('/current-subscriber/{id}', [App\Http\Controllers\SubscriptionPlanController::class, 'currentSubscriberList'])->name('current-subscriber.list');
NEXT: });

LINE: 752
PREV: 
PREV: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');
PREV: Route::post('pay-to-user', [App\Http\Controllers\UserController::class,'payToUser'])->name('pay.user');
TEXT: Route::post('check-payout-status', [App\Http\Controllers\UserController::class,'checkPayoutStatus'])->name('check.payout.status');
NEXT: 
NEXT: Route::middleware(['permission:subscription-plans,subscription-plans'])->group(function () {
NEXT: Route::get('/subscription-plans', [App\Http\Controllers\SubscriptionPlanController::class, 'index'])->name('subscription-plans.index');
NEXT: Route::get('/current-subscriber/{id}', [App\Http\Controllers\SubscriptionPlanController::class, 'currentSubscriberList'])->name('current-subscriber.list');
NEXT: });
NEXT: Route::middleware(['permission:subscription-plans,subscription-plans.'.((str_contains(Request::url(), 'save')) ? (explode("save", Request::url())[1] ? "edit" : "create") : Request::url())])->group(function () {

LINE: 799
PREV: });
PREV: 
PREV: 
TEXT: Route::post('/send-ad-notification', [App\Http\Controllers\AdvertisementsController::class, 'sendNotification'])->name('advertisement.sendnotification');
NEXT: 
NEXT: Route::middleware(['permission:zone,zone.list'])->group(function () {
NEXT: Route::get('zone', [App\Http\Controllers\ZoneController::class, 'index'])->name('zone');
NEXT: });
NEXT: Route::middleware(['permission:zone,zone.create'])->group(function () {
NEXT: Route::get('/zone/create', [App\Http\Controllers\ZoneController::class, 'create'])->name('zone.create');

LINE: 877
PREV: Route::any('add-to-cart', [App\Http\Controllers\ProductController::class, 'addToCart'])->name('add-to-cart');
PREV: Route::any('cart-remove/{index}', [App\Http\Controllers\ProductController::class, 'remove'])->name('cart.remove');
PREV: Route::any('cart-update', [App\Http\Controllers\ProductController::class, 'update'])->name('cart.update');
TEXT: Route::post('/clear-cart', function () {
NEXT: session()->forget('cart');
NEXT: return response()->json(['success' => true]);
NEXT: })->name('clear.cart');
NEXT: Route::get('/get-session-cart', function () {
NEXT: return response()->json(session('cart', []));
NEXT: });

LINE: 900
PREV: });
PREV: 
PREV: Route::middleware(['permission:supportHistory,supportHistory.list'])->group(function () {
TEXT: Route::get('/support', [App\Http\Controllers\SupportHistoryController::class, 'index'])->name('users.support');
NEXT: });
NEXT: Route::middleware(['permission:drivers,drivers.chat'])->group(function () {
NEXT: Route::get('/drivers/chat/{id}', [App\Http\Controllers\DriverController::class, 'driverChat'])->name('drivers.chat');
NEXT: });
NEXT: Route::post('send-notification', [App\Http\Controllers\NotificationController::class, 'sendNotification'])->name('send-notification');
NEXT: Route::middleware(['permission:vendors,vendors.chat'])->group(function () {

LINE: 905
PREV: Route::middleware(['permission:drivers,drivers.chat'])->group(function () {
PREV: Route::get('/drivers/chat/{id}', [App\Http\Controllers\DriverController::class, 'driverChat'])->name('drivers.chat');
PREV: });
TEXT: Route::post('send-notification', [App\Http\Controllers\NotificationController::class, 'sendNotification'])->name('send-notification');
NEXT: Route::middleware(['permission:vendors,vendors.chat'])->group(function () {
NEXT: Route::get('/vendors/chat/{id}', [App\Http\Controllers\VendorController::class, 'vendorChat'])->name('vendors.chat');
NEXT: });
NEXT: Route::middleware(['permission:users,users.chat'])->group(function () {
NEXT: Route::get('/users/chat/{id}', [App\Http\Controllers\UserController::class, 'userChat'])->name('users.chat');
NEXT: });

LINE: 909
PREV: Route::middleware(['permission:vendors,vendors.chat'])->group(function () {
PREV: Route::get('/vendors/chat/{id}', [App\Http\Controllers\VendorController::class, 'vendorChat'])->name('vendors.chat');
PREV: });
TEXT: Route::middleware(['permission:users,users.chat'])->group(function () {
NEXT: Route::get('/users/chat/{id}', [App\Http\Controllers\UserController::class, 'userChat'])->name('users.chat');
NEXT: });
NEXT: Route::middleware(['permission:providers,providers.chat'])->group(function () {
NEXT: Route::get('/provider/chat/{id}', [App\Http\Controllers\ProvidersController::class, 'providerChat'])->name('providers.chat');
NEXT: });
NEXT: Route::middleware(['permission:ondemand-workers,ondemand.workers.chat'])->group(function () {

LINE: 910
PREV: Route::get('/vendors/chat/{id}', [App\Http\Controllers\VendorController::class, 'vendorChat'])->name('vendors.chat');
PREV: });
PREV: Route::middleware(['permission:users,users.chat'])->group(function () {
TEXT: Route::get('/users/chat/{id}', [App\Http\Controllers\UserController::class, 'userChat'])->name('users.chat');
NEXT: });
NEXT: Route::middleware(['permission:providers,providers.chat'])->group(function () {
NEXT: Route::get('/provider/chat/{id}', [App\Http\Controllers\ProvidersController::class, 'providerChat'])->name('providers.chat');
NEXT: });
NEXT: Route::middleware(['permission:ondemand-workers,ondemand.workers.chat'])->group(function () {
NEXT: Route::get('/worker/chat/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'workerChat'])->name('ondemand.workers.chat');

### FILE: C:\deploy\adminpanel\app\Http\Controllers\BookTableController.php

- Hits: 1

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: 
NEXT: class BookTableController extends Controller
NEXT: {

### FILE: C:\deploy\adminpanel\app\Http\Controllers\NotificationController.php

- Hits: 1

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: use Illuminate\Support\Facades\Auth;
TEXT: use App\Models\VendorUsers;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;
NEXT: 
NEXT: class NotificationController extends Controller
NEXT: {

### FILE: C:\deploy\adminpanel\app\Http\Controllers\ProductController.php

- Hits: 1

LINE: 5
PREV: 
PREV: namespace App\Http\Controllers;
PREV: 
TEXT: use App\Models\VendorUsers;
NEXT: use App\Models\User;
NEXT: use Illuminate\Http\Request;
NEXT: use Illuminate\Support\Facades\Auth;
NEXT: use Session;
NEXT: use Illuminate\Support\Facades\Storage;
NEXT: use Google\Client as Google_Client;

### FILE: C:\deploy\adminpanel\app\Http\Controllers\RoleController.php

- Hits: 1

LINE: 108
PREV: if ($permissions) {
PREV: $permissions->delete();
PREV: }
TEXT: $user = User::where('role_id', $id);
NEXT: if($user){
NEXT: $user->delete();
NEXT: }
NEXT: $id = json_decode($id);
NEXT: 
NEXT: if (is_array($id)) {

### FILE: C:\deploy\adminpanel\app\Http\Controllers\UserController.php

- Hits: 28

LINE: 30
PREV: 
PREV: public function index()
PREV: {
TEXT: return view("users.index");
NEXT: }
NEXT: 
NEXT: public function edit($id)
NEXT: {
NEXT: return view('users.edit')->with('id', $id);
NEXT: }

LINE: 35
PREV: 
PREV: public function edit($id)
PREV: {
TEXT: return view('users.edit')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function view($id)
NEXT: {
NEXT: return view('users.view')->with('id', $id);
NEXT: }

LINE: 40
PREV: 
PREV: public function view($id)
PREV: {
TEXT: return view('users.view')->with('id', $id);
NEXT: }
NEXT: 
NEXT: public function profile()
NEXT: {
NEXT: $user = Auth::user();
NEXT: return view('users.profile', compact(['user']));

LINE: 46
PREV: public function profile()
PREV: {
PREV: $user = Auth::user();
TEXT: return view('users.profile', compact(['user']));
NEXT: }
NEXT: 
NEXT: public function update(Request $request, $id)
NEXT: {
NEXT: $name = $request->input('name');
NEXT: $password = $request->input('password');

LINE: 82
PREV: return Redirect()->back()->with(['message' => $error]);
PREV: }
PREV: 
TEXT: $user = User::find($id);
NEXT: if ($user) {
NEXT: $user->name = $name;
NEXT: $user->email = $email;
NEXT: if ($password != '') {
NEXT: $user->password = Hash::make($password);
NEXT: }

LINE: 97
PREV: 
PREV: public function create()
PREV: {
TEXT: return view('users.create');
NEXT: }
NEXT: 
NEXT: public function adminUsers()
NEXT: {
NEXT: $users = User::join('role', 'role.id', '=', 'users.role_id')
NEXT: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();

LINE: 100
PREV: return view('users.create');
PREV: }
PREV: 
TEXT: public function adminUsers()
NEXT: {
NEXT: $users = User::join('role', 'role.id', '=', 'users.role_id')
NEXT: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();
NEXT: $users->map(function($user) {
NEXT: if(!empty($user->email)){
NEXT: $user->email = $this->shortEmail($user->email);

LINE: 102
PREV: 
PREV: public function adminUsers()
PREV: {
TEXT: $users = User::join('role', 'role.id', '=', 'users.role_id')
NEXT: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();
NEXT: $users->map(function($user) {
NEXT: if(!empty($user->email)){
NEXT: $user->email = $this->shortEmail($user->email);
NEXT: }
NEXT: return $user;

LINE: 103
PREV: public function adminUsers()
PREV: {
PREV: $users = User::join('role', 'role.id', '=', 'users.role_id')
TEXT: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();
NEXT: $users->map(function($user) {
NEXT: if(!empty($user->email)){
NEXT: $user->email = $this->shortEmail($user->email);
NEXT: }
NEXT: return $user;
NEXT: });

LINE: 104
PREV: {
PREV: $users = User::join('role', 'role.id', '=', 'users.role_id')
PREV: ->select('users.*', 'role.role_name as roleName')->where('users.id', '!=', 1)->get();
TEXT: $users->map(function($user) {
NEXT: if(!empty($user->email)){
NEXT: $user->email = $this->shortEmail($user->email);
NEXT: }
NEXT: return $user;
NEXT: });
NEXT: return view('admin_users.index', compact(['users']));

LINE: 110
PREV: }
PREV: return $user;
PREV: });
TEXT: return view('admin_users.index', compact(['users']));
NEXT: }
NEXT: 
NEXT: public function createAdminUsers()
NEXT: {
NEXT: $roles = Role::all();
NEXT: return view('admin_users.create', compact(['roles']));

LINE: 113
PREV: return view('admin_users.index', compact(['users']));
PREV: }
PREV: 
TEXT: public function createAdminUsers()
NEXT: {
NEXT: $roles = Role::all();
NEXT: return view('admin_users.create', compact(['roles']));
NEXT: 
NEXT: }
NEXT: 

LINE: 116
PREV: public function createAdminUsers()
PREV: {
PREV: $roles = Role::all();
TEXT: return view('admin_users.create', compact(['roles']));
NEXT: 
NEXT: }
NEXT: 
NEXT: public function storeAdminUsers(Request $request)
NEXT: {
NEXT: $name = $request->input('name');

LINE: 120
PREV: 
PREV: }
PREV: 
TEXT: public function storeAdminUsers(Request $request)
NEXT: {
NEXT: $name = $request->input('name');
NEXT: $password = $request->input('password');
NEXT: $email = $request->input('email');
NEXT: $role = $request->input('role');
NEXT: 

LINE: 139
PREV: return Redirect()->back()->with(['message' => $error]);
PREV: }
PREV: 
TEXT: User::create([
NEXT: 'name' => $name,
NEXT: 'email' => $email,
NEXT: 'password' => Hash::make($password),
NEXT: 'role_id' => $role,
NEXT: ]);
NEXT: 

LINE: 146
PREV: 'role_id' => $role,
PREV: ]);
PREV: 
TEXT: return redirect('admin-users');
NEXT: 
NEXT: }
NEXT: 
NEXT: public function editAdminUsers($id)
NEXT: {
NEXT: $user = User::join('role', 'role.id', '=', 'users.role_id')->select('users.*', 'role.role_name as roleName')->find($id);

LINE: 150
PREV: 
PREV: }
PREV: 
TEXT: public function editAdminUsers($id)
NEXT: {
NEXT: $user = User::join('role', 'role.id', '=', 'users.role_id')->select('users.*', 'role.role_name as roleName')->find($id);
NEXT: $roles = Role::all();
NEXT: if (!empty($user['email'])) {
NEXT: $user['email'] = $this->shortEmail($user['email']);
NEXT: }

LINE: 152
PREV: 
PREV: public function editAdminUsers($id)
PREV: {
TEXT: $user = User::join('role', 'role.id', '=', 'users.role_id')->select('users.*', 'role.role_name as roleName')->find($id);
NEXT: $roles = Role::all();
NEXT: if (!empty($user['email'])) {
NEXT: $user['email'] = $this->shortEmail($user['email']);
NEXT: }
NEXT: return view('admin_users.edit', compact(['user', 'roles']));
NEXT: 

LINE: 157
PREV: if (!empty($user['email'])) {
PREV: $user['email'] = $this->shortEmail($user['email']);
PREV: }
TEXT: return view('admin_users.edit', compact(['user', 'roles']));
NEXT: 
NEXT: }
NEXT: 
NEXT: public function updateAdminUsers(Request $request, $id)
NEXT: {
NEXT: $name = $request->input('name');

LINE: 161
PREV: 
PREV: }
PREV: 
TEXT: public function updateAdminUsers(Request $request, $id)
NEXT: {
NEXT: $name = $request->input('name');
NEXT: $password = $request->input('password');
NEXT: $old_password = $request->input('old_password');
NEXT: $email = $request->input('email');
NEXT: $role = ($id == 1) ? 1 : $request->input('role');

LINE: 174
PREV: 'email' => 'required|email'
PREV: ]);
PREV: } else {
TEXT: $user = User::find($id);
NEXT: if (password_verify($old_password, $user->password)) {
NEXT: $validator = Validator::make($request->all(), [
NEXT: 'name' => 'required|max:255',
NEXT: 'password' => 'required|min:8',
NEXT: 'confirm_password' => 'required|same:password',
NEXT: 'email' => 'required|email'

LINE: 194
PREV: return Redirect()->back()->with(['message' => $error]);
PREV: }
PREV: 
TEXT: $user = User::find($id);
NEXT: 
NEXT: if ($user) {
NEXT: 
NEXT: $user->name = $name;
NEXT: $user->email = $email;
NEXT: if ($password != '') {

LINE: 207
PREV: $user->save();
PREV: }
PREV: 
TEXT: return redirect('admin-users');
NEXT: }
NEXT: 
NEXT: public function deleteAdminUsers($id)
NEXT: {
NEXT: $id = json_decode($id);
NEXT: 

LINE: 210
PREV: return redirect('admin-users');
PREV: }
PREV: 
TEXT: public function deleteAdminUsers($id)
NEXT: {
NEXT: $id = json_decode($id);
NEXT: 
NEXT: if (is_array($id)) {
NEXT: 
NEXT: for ($i = 0; $i < count($id); $i++) {

LINE: 217
PREV: if (is_array($id)) {
PREV: 
PREV: for ($i = 0; $i < count($id); $i++) {
TEXT: $users = User::find($id[$i]);
NEXT: $users->delete();
NEXT: }
NEXT: 
NEXT: } else {
NEXT: $user = User::find($id);
NEXT: $user->delete();

LINE: 218
PREV: 
PREV: for ($i = 0; $i < count($id); $i++) {
PREV: $users = User::find($id[$i]);
TEXT: $users->delete();
NEXT: }
NEXT: 
NEXT: } else {
NEXT: $user = User::find($id);
NEXT: $user->delete();
NEXT: }

LINE: 222
PREV: }
PREV: 
PREV: } else {
TEXT: $user = User::find($id);
NEXT: $user->delete();
NEXT: }
NEXT: 
NEXT: return redirect()->back();
NEXT: }
NEXT: 

LINE: 683
PREV: }
PREV: public function userChat($id)
PREV: {
TEXT: return view('users.chat', compact('id'));
NEXT: }
NEXT: }

### FILE: C:\deploy\adminpanel\app\Http\Controllers\Auth\ConfirmPasswordController.php

- Hits: 1

LINE: 25
PREV: use ConfirmsPasswords;
PREV: 
PREV: /**
TEXT: * Where to redirect users when the intended url fails.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\adminpanel\app\Http\Controllers\Auth\ForgotPasswordController.php

- Hits: 1

LINE: 17
PREV: |
PREV: | This controller is responsible for handling password reset emails and
PREV: | includes a trait which assists in sending these notifications from
TEXT: | your application to your users. Feel free to explore this trait.
NEXT: |
NEXT: */
NEXT: 
NEXT: use SendsPasswordResetEmails;
NEXT: }

### FILE: C:\deploy\adminpanel\app\Http\Controllers\Auth\LoginController.php

- Hits: 4

LINE: 7
PREV: 
PREV: use App\Http\Controllers\Controller;
PREV: use App\Providers\RouteServiceProvider;
TEXT: use Illuminate\Foundation\Auth\AuthenticatesUsers;
NEXT: 
NEXT: class LoginController extends Controller
NEXT: {
NEXT: /*
NEXT: |--------------------------------------------------------------------------
NEXT: | Login Controller

LINE: 16
PREV: | Login Controller
PREV: |--------------------------------------------------------------------------
PREV: |
TEXT: | This controller handles authenticating users for the application and
NEXT: | redirecting them to your home screen. The controller uses a trait
NEXT: | to conveniently provide its functionality to your applications.
NEXT: |
NEXT: */
NEXT: 
NEXT: use AuthenticatesUsers;

LINE: 22
PREV: |
PREV: */
PREV: 
TEXT: use AuthenticatesUsers;
NEXT: 
NEXT: /**
NEXT: * Where to redirect users after login.
NEXT: *
NEXT: * @var string
NEXT: */

LINE: 25
PREV: use AuthenticatesUsers;
PREV: 
PREV: /**
TEXT: * Where to redirect users after login.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\adminpanel\app\Http\Controllers\Auth\RegisterController.php

- Hits: 6

LINE: 8
PREV: use App\Http\Controllers\Controller;
PREV: use App\Providers\RouteServiceProvider;
PREV: use App\Models\User;
TEXT: use Illuminate\Foundation\Auth\RegistersUsers;
NEXT: use Illuminate\Support\Facades\Hash;
NEXT: use Illuminate\Support\Facades\Validator;
NEXT: 
NEXT: class RegisterController extends Controller
NEXT: {
NEXT: /*

LINE: 19
PREV: | Register Controller
PREV: |--------------------------------------------------------------------------
PREV: |
TEXT: | This controller handles the registration of new users as well as their
NEXT: | validation and creation. By default this controller uses a trait to
NEXT: | provide this functionality without requiring any additional code.
NEXT: |
NEXT: */
NEXT: 
NEXT: use RegistersUsers;

LINE: 25
PREV: |
PREV: */
PREV: 
TEXT: use RegistersUsers;
NEXT: 
NEXT: /**
NEXT: * Where to redirect users after registration.
NEXT: *
NEXT: * @var string
NEXT: */

LINE: 28
PREV: use RegistersUsers;
PREV: 
PREV: /**
TEXT: * Where to redirect users after registration.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

LINE: 57
PREV: {
PREV: return Validator::make($data, [
PREV: 'name' => ['required', 'string', 'max:255'],
TEXT: 'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
NEXT: 'password' => ['required', 'string', 'min:8', 'confirmed'],
NEXT: ]);
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Create a new user instance after a valid registration.

LINE: 70
PREV: */
PREV: protected function create(array $data)
PREV: {
TEXT: return User::create([
NEXT: 'name' => $data['name'],
NEXT: 'email' => $data['email'],
NEXT: 'password' => Hash::make($data['password']),
NEXT: ]);
NEXT: }
NEXT: }

### FILE: C:\deploy\adminpanel\app\Http\Controllers\Auth\ResetPasswordController.php

- Hits: 1

LINE: 25
PREV: use ResetsPasswords;
PREV: 
PREV: /**
TEXT: * Where to redirect users after resetting their password.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: }

### FILE: C:\deploy\adminpanel\app\Http\Controllers\Auth\VerificationController.php

- Hits: 1

LINE: 25
PREV: use VerifiesEmails;
PREV: 
PREV: /**
TEXT: * Where to redirect users after verification.
NEXT: *
NEXT: * @var string
NEXT: */
NEXT: protected $redirectTo = RouteServiceProvider::HOME;
NEXT: 
NEXT: /**

### FILE: C:\deploy\adminpanel\app\Http\Middleware\CheckUserRoleMiddleware.php

- Hits: 2

LINE: 29
PREV: 
PREV: $role_has_permissions = array_unique($role_has_permissions);
PREV: 
TEXT: $users = User::join('role', 'role.id', '=', 'users.role_id')->where('users.id', '=', $user->id)->select('role.role_name as roleName')->first();
NEXT: 
NEXT: session(['user_role' => $users->roleName, 'user_permissions' => json_encode($role_has_permissions)]);
NEXT: 
NEXT: }
NEXT: return $next($request);
NEXT: }

LINE: 31
PREV: 
PREV: $users = User::join('role', 'role.id', '=', 'users.role_id')->where('users.id', '=', $user->id)->select('role.role_name as roleName')->first();
PREV: 
TEXT: session(['user_role' => $users->roleName, 'user_permissions' => json_encode($role_has_permissions)]);
NEXT: 
NEXT: }
NEXT: return $next($request);
NEXT: }
NEXT: }

### FILE: C:\deploy\adminpanel\Modules\AI\routes\api.php

- Hits: 6

LINE: 19
PREV: */
PREV: 
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
TEXT: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
NEXT: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
NEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 20
PREV: 
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
TEXT: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
NEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 21
PREV: Route::group(['prefix' => 'v1', 'as' => 'v1.','middleware' => ['apiKeyAuth']], function () {
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
TEXT: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
NEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 22
PREV: Route::post('generate-title-and-description', [ProductAutoFillController::class, 'generateTitleAndDescription']);
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
TEXT: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
NEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 23
PREV: Route::post('generate-variation-data', [ProductAutoFillController::class, 'generateVariationData']);
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
PREV: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
TEXT: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
NEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

LINE: 24
PREV: Route::post('generate-ingredients', [ProductAutoFillController::class, 'generateIngredients']);
PREV: Route::post('generate-addons', [ProductAutoFillController::class, 'generateAddons']);
PREV: Route::post('generate-specification', [ProductAutoFillController::class, 'generateSpecification']);
TEXT: Route::post('generate-image-data', [ProductAutoFillController::class, 'generateImageData']);
NEXT: });

### FILE: C:\deploy\adminpanel\Modules\AI\routes\web.php

- Hits: 2

LINE: 20
PREV: Route::get('title-auto-fill', [ProductAutoFillController::class, 'titleAutoFill'])->name('title-auto-fill');
PREV: Route::get('description-auto-fill', [ProductAutoFillController::class, 'descriptionAutoFill'])->name('description-auto-fill');
PREV: Route::get('variation-setup-auto-fill', [ProductAutoFillController::class, 'variationSetupAutoFill'])->name('variation-setup-auto-fill');
TEXT: Route::post('analyze-image-auto-fill', [ProductAutoFillController::class, 'analyzeImageAutoFill'])->name('analyze-image-auto-fill');
NEXT: Route::post('generate-title-suggestions', [ProductAutoFillController::class, 'generateTitleSuggestions'])->name('generate-title-suggestions');
NEXT: Route::get('ingredients-auto-fill', [ProductAutoFillController::class, 'ingredientsAutoFill'])->name('ingredients-auto-fill');
NEXT: Route::get('addons-auto-fill', [ProductAutoFillController::class, 'addonsAutoFill'])->name('addons-auto-fill');
NEXT: Route::get('specification-auto-fill', [ProductAutoFillController::class, 'specificationAutoFill'])->name('specification-auto-fill');
NEXT: });

LINE: 21
PREV: Route::get('description-auto-fill', [ProductAutoFillController::class, 'descriptionAutoFill'])->name('description-auto-fill');
PREV: Route::get('variation-setup-auto-fill', [ProductAutoFillController::class, 'variationSetupAutoFill'])->name('variation-setup-auto-fill');
PREV: Route::post('analyze-image-auto-fill', [ProductAutoFillController::class, 'analyzeImageAutoFill'])->name('analyze-image-auto-fill');
TEXT: Route::post('generate-title-suggestions', [ProductAutoFillController::class, 'generateTitleSuggestions'])->name('generate-title-suggestions');
NEXT: Route::get('ingredients-auto-fill', [ProductAutoFillController::class, 'ingredientsAutoFill'])->name('ingredients-auto-fill');
NEXT: Route::get('addons-auto-fill', [ProductAutoFillController::class, 'addonsAutoFill'])->name('addons-auto-fill');
NEXT: Route::get('specification-auto-fill', [ProductAutoFillController::class, 'specificationAutoFill'])->name('specification-auto-fill');
NEXT: });

### FILE: C:\deploy\adminpanel\routes\web.php

- Hits: 47

LINE: 15
PREV: */
PREV: 
PREV: Route::get('lang/change', [App\Http\Controllers\LangController::class, 'change'])->name('changeLang');
TEXT: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);
NEXT: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);
NEXT: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
NEXT: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
NEXT: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
NEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);

LINE: 16
PREV: 
PREV: Route::get('lang/change', [App\Http\Controllers\LangController::class, 'change'])->name('changeLang');
PREV: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);
TEXT: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);
NEXT: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
NEXT: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
NEXT: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
NEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);

LINE: 17
PREV: Route::get('lang/change', [App\Http\Controllers\LangController::class, 'change'])->name('changeLang');
PREV: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);
PREV: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);
TEXT: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
NEXT: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
NEXT: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
NEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 

LINE: 18
PREV: Route::post('payments/razorpay/createorder', [App\Http\Controllers\RazorPayController::class, 'createOrderid']);
PREV: Route::post('payments/getpaytmchecksum', [App\Http\Controllers\PaymentController::class, 'getPaytmChecksum']);
PREV: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
TEXT: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
NEXT: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
NEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 
NEXT: Auth::routes();

LINE: 20
PREV: Route::post('payments/validatechecksum', [App\Http\Controllers\PaymentController::class, 'validateChecksum']);
PREV: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
PREV: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
TEXT: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
NEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 
NEXT: Auth::routes();
NEXT: 
NEXT: Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

LINE: 21
PREV: Route::post('payments/initiatepaytmpayment', [App\Http\Controllers\PaymentController::class, 'initiatePaytmPayment']);
PREV: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
PREV: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
TEXT: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
NEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 
NEXT: Auth::routes();
NEXT: 
NEXT: Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
NEXT: Route::get('/dashboard/{id?}/{type?}', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');

LINE: 22
PREV: Route::get('payments/paytmpaymentcallback', [App\Http\Controllers\PaymentController::class, 'paytmPaymentcallback']);
PREV: Route::post('payments/paypalclientid', [App\Http\Controllers\PaymentController::class, 'getPaypalClienttoken']);
PREV: Route::post('payments/paypaltransaction', [App\Http\Controllers\PaymentController::class, 'createBraintreePayment']);
TEXT: Route::post('payments/stripepaymentintent', [App\Http\Controllers\PaymentController::class, 'createStripePaymentIntent']);
NEXT: 
NEXT: Auth::routes();
NEXT: 
NEXT: Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
NEXT: Route::get('/dashboard/{id?}/{type?}', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
NEXT: 

LINE: 30
PREV: Route::get('/dashboard/{id?}/{type?}', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
PREV: 
PREV: //customers
TEXT: Route::middleware(['permission:users,users'])->group(function () {
NEXT: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
NEXT: });
NEXT: Route::middleware(['permission:users,users.create'])->group(function () {
NEXT: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
NEXT: });
NEXT: Route::middleware(['permission:users,users.edit'])->group(function () {

LINE: 31
PREV: 
PREV: //customers
PREV: Route::middleware(['permission:users,users'])->group(function () {
TEXT: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
NEXT: });
NEXT: Route::middleware(['permission:users,users.create'])->group(function () {
NEXT: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
NEXT: });
NEXT: Route::middleware(['permission:users,users.edit'])->group(function () {
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');

LINE: 33
PREV: Route::middleware(['permission:users,users'])->group(function () {
PREV: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
PREV: });
TEXT: Route::middleware(['permission:users,users.create'])->group(function () {
NEXT: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
NEXT: });
NEXT: Route::middleware(['permission:users,users.edit'])->group(function () {
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: });
NEXT: Route::middleware(['permission:users,users.view'])->group(function () {

LINE: 34
PREV: Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users');
PREV: });
PREV: Route::middleware(['permission:users,users.create'])->group(function () {
TEXT: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
NEXT: });
NEXT: Route::middleware(['permission:users,users.edit'])->group(function () {
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: });
NEXT: Route::middleware(['permission:users,users.view'])->group(function () {
NEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');

LINE: 36
PREV: Route::middleware(['permission:users,users.create'])->group(function () {
PREV: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
PREV: });
TEXT: Route::middleware(['permission:users,users.edit'])->group(function () {
NEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: });
NEXT: Route::middleware(['permission:users,users.view'])->group(function () {
NEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
NEXT: });
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');

LINE: 37
PREV: Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create'])->name('users.create');
PREV: });
PREV: Route::middleware(['permission:users,users.edit'])->group(function () {
TEXT: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
NEXT: });
NEXT: Route::middleware(['permission:users,users.view'])->group(function () {
NEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
NEXT: });
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
NEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');

LINE: 39
PREV: Route::middleware(['permission:users,users.edit'])->group(function () {
PREV: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
PREV: });
TEXT: Route::middleware(['permission:users,users.view'])->group(function () {
NEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
NEXT: });
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
NEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');
NEXT: 
NEXT: //vendors

LINE: 40
PREV: Route::get('/users/edit/{id}', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
PREV: });
PREV: Route::middleware(['permission:users,users.view'])->group(function () {
TEXT: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
NEXT: });
NEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
NEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');
NEXT: 
NEXT: //vendors
NEXT: Route::middleware(['permission:vendors,vendors'])->group(function () {

LINE: 42
PREV: Route::middleware(['permission:users,users.view'])->group(function () {
PREV: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
PREV: });
TEXT: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
NEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');
NEXT: 
NEXT: //vendors
NEXT: Route::middleware(['permission:vendors,vendors'])->group(function () {
NEXT: Route::get('/vendors', [App\Http\Controllers\VendorController::class, 'index'])->name('vendors');
NEXT: });

LINE: 43
PREV: Route::get('/users/view/{id}', [App\Http\Controllers\UserController::class, 'view'])->name('users.view');
PREV: });
PREV: Route::get('/users/profile', [App\Http\Controllers\UserController::class, 'profile'])->name('users.profile');
TEXT: Route::post('/users/profile/update/{id}', [App\Http\Controllers\UserController::class, 'update'])->name('users.profile.update');
NEXT: 
NEXT: //vendors
NEXT: Route::middleware(['permission:vendors,vendors'])->group(function () {
NEXT: Route::get('/vendors', [App\Http\Controllers\VendorController::class, 'index'])->name('vendors');
NEXT: });
NEXT: Route::middleware(['permission:approve_vendors,approve.vendors.list'])->group(function () {

LINE: 290
PREV: Route::get('walletstransaction', [App\Http\Controllers\TransactionController::class, 'index'])->name('walletstransaction');
PREV: });
PREV: Route::middleware(['permission:wallet-transaction,wallet-transaction'])->group(function () {
TEXT: Route::get('/walletstransaction/{id}', [App\Http\Controllers\TransactionController::class, 'index'])->name('users.walletstransaction');
NEXT: });
NEXT: Route::post('order-status-notification', [App\Http\Controllers\OrderController::class, 'sendNotification'])->name('order-status-notification');
NEXT: 
NEXT: Route::middleware(['permission:god-eye,map'])->group(function () {
NEXT: Route::get('/map/multivendor', [App\Http\Controllers\MapController::class, 'multivendor'])->name('map.multivendor');
NEXT: });

LINE: 292
PREV: Route::middleware(['permission:wallet-transaction,wallet-transaction'])->group(function () {
PREV: Route::get('/walletstransaction/{id}', [App\Http\Controllers\TransactionController::class, 'index'])->name('users.walletstransaction');
PREV: });
TEXT: Route::post('order-status-notification', [App\Http\Controllers\OrderController::class, 'sendNotification'])->name('order-status-notification');
NEXT: 
NEXT: Route::middleware(['permission:god-eye,map'])->group(function () {
NEXT: Route::get('/map/multivendor', [App\Http\Controllers\MapController::class, 'multivendor'])->name('map.multivendor');
NEXT: });
NEXT: Route::middleware(['permission:parcel-service-god-eye,parcel-service-map'])->group(function () {
NEXT: Route::get('/map/parcel', [App\Http\Controllers\MapController::class, 'parcel'])->name('map.parcel');

LINE: 484
PREV: Route::get('/notification', [App\Http\Controllers\NotificationController::class, 'index'])->name('notification');
PREV: });
PREV: 
TEXT: Route::post('broadcastnotification', [App\Http\Controllers\NotificationController::class, 'broadcastnotification'])->name('broadcastnotification');
NEXT: Route::get('/booktable/{id}', [App\Http\Controllers\BookTableController::class, 'index'])->name('vendors.booktable');
NEXT: Route::get('/booktable/edit/{id}', [App\Http\Controllers\BookTableController::class, 'edit'])->name('booktable.edit');
NEXT: Route::post('/sendnotification', [App\Http\Controllers\BookTableController::class, 'sendnotification'])->name('sendnotification');
NEXT: 
NEXT: Route::middleware(['permission:payout-request-driver,payout-request.driver'])->group(function () {
NEXT: Route::get('/payoutRequests/drivers', [App\Http\Controllers\PayoutRequestController::class, 'index'])->name('payoutRequests.drivers');

LINE: 487
PREV: Route::post('broadcastnotification', [App\Http\Controllers\NotificationController::class, 'broadcastnotification'])->name('broadcastnotification');
PREV: Route::get('/booktable/{id}', [App\Http\Controllers\BookTableController::class, 'index'])->name('vendors.booktable');
PREV: Route::get('/booktable/edit/{id}', [App\Http\Controllers\BookTableController::class, 'edit'])->name('booktable.edit');
TEXT: Route::post('/sendnotification', [App\Http\Controllers\BookTableController::class, 'sendnotification'])->name('sendnotification');
NEXT: 
NEXT: Route::middleware(['permission:payout-request-driver,payout-request.driver'])->group(function () {
NEXT: Route::get('/payoutRequests/drivers', [App\Http\Controllers\PayoutRequestController::class, 'index'])->name('payoutRequests.drivers');
NEXT: Route::get('/payoutRequests/drivers/{id}', [App\Http\Controllers\PayoutRequestController::class, 'index'])->name('payoutRequests.drivers.view');
NEXT: });
NEXT: Route::middleware(['permission:payout-request-vendor,payout-request.vendor'])->group(function () {

LINE: 572
PREV: Route::middleware(['permission:footer,footerTemplate'])->group(function () {
PREV: Route::get('footerTemplate', [App\Http\Controllers\SettingsController::class, 'footerTemplate'])->name('footerTemplate');
PREV: });
TEXT: Route::post('complaint_notification', [App\Http\Controllers\RideController::class, 'complaintNotification'])->name('complaint_notification');
NEXT: Route::middleware(['permission:cms,cms'])->group(function () {
NEXT: Route::get('cms', [App\Http\Controllers\CmsController::class, 'index'])->name('cms');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:cms,cms.edit'])->group(function () {
NEXT: Route::get('/cms/edit/{id}', [App\Http\Controllers\CmsController::class, 'edit'])->name('cms.edit');

LINE: 583
PREV: Route::middleware(['permission:cms,cms.create'])->group(function () {
PREV: Route::get('/cms/create', [App\Http\Controllers\CmsController::class, 'create'])->name('cms.create');
PREV: });
TEXT: Route::post('/firebase/config', [App\Http\Controllers\FirebaseController::class, 'config'])->name('firebase.config');
NEXT: Route::middleware(['permission:dynamic-notifications,dynamic-notification.index'])->group(function () {
NEXT: Route::get('dynamic-notification', [App\Http\Controllers\DynamicNotificationController::class, 'index'])->name('dynamic-notification.index');
NEXT: });
NEXT: Route::middleware(['permission:dynamic-notifications,dynamic-notification.save'])->group(function () {
NEXT: Route::get('dynamic-notification/save/{id?}', [App\Http\Controllers\DynamicNotificationController::class, 'save'])->name('dynamic-notification.save');
NEXT: });

LINE: 610
PREV: });
PREV: Route::get('email-templates/delete/{id}', [App\Http\Controllers\SettingsController::class, 'emailTemplatesDelete'])->name('email-templates.delete');
PREV: 
TEXT: Route::post('send-email', [App\Http\Controllers\SendEmailController::class, 'sendMail'])->name('sendMail');
NEXT: 
NEXT: Route::middleware(['permission:report,' . ((str_contains(Request::url(), 'report/')) ? explode("report/", Request::url())[1] : Request::url())])->group(function () {
NEXT: Route::get('report/{type}', [App\Http\Controllers\ReportController::class, 'index'])->name('report.index');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:gift-cards,gift-card.index'])->group(function () {

LINE: 633
PREV: Route::get('role/save', [App\Http\Controllers\RoleController::class, 'save'])->name('role.save');
PREV: });
PREV: Route::middleware(['permission:roles,role.store'])->group(function () {
TEXT: Route::post('role/store', [App\Http\Controllers\RoleController::class, 'store'])->name('role.store');
NEXT: });
NEXT: Route::middleware(['permission:roles,role.delete'])->group(function () {
NEXT: Route::get('role/delete/{id}', [App\Http\Controllers\RoleController::class, 'delete'])->name('role.delete');
NEXT: });
NEXT: Route::middleware(['permission:roles,role.edit'])->group(function () {
NEXT: Route::get('role/edit/{id}', [App\Http\Controllers\RoleController::class, 'edit'])->name('role.edit');

LINE: 642
PREV: Route::get('role/edit/{id}', [App\Http\Controllers\RoleController::class, 'edit'])->name('role.edit');
PREV: });
PREV: Route::middleware(['permission:roles,role.update'])->group(function () {
TEXT: Route::post('role/update/{id}', [App\Http\Controllers\RoleController::class, 'update'])->name('role.update');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:admins,admin.users'])->group(function () {
NEXT: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.create'])->group(function () {

LINE: 645
PREV: Route::post('role/update/{id}', [App\Http\Controllers\RoleController::class, 'update'])->name('role.update');
PREV: });
PREV: 
TEXT: Route::middleware(['permission:admins,admin.users'])->group(function () {
NEXT: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
NEXT: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {

LINE: 646
PREV: });
PREV: 
PREV: Route::middleware(['permission:admins,admin.users'])->group(function () {
TEXT: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
NEXT: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
NEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');

LINE: 648
PREV: Route::middleware(['permission:admins,admin.users'])->group(function () {
PREV: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
NEXT: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
NEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {

LINE: 649
PREV: Route::get('admin-users', [App\Http\Controllers\UserController::class, 'adminUsers'])->name('admin.users');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
TEXT: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
NEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
NEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');

LINE: 651
PREV: Route::middleware(['permission:admins,admin.users.create'])->group(function () {
PREV: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
NEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
NEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {

LINE: 652
PREV: Route::get('admin-users/create', [App\Http\Controllers\UserController::class, 'createAdminUsers'])->name('admin.users.create');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
TEXT: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
NEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
NEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');

LINE: 654
PREV: Route::middleware(['permission:admins,admin.users.store'])->group(function () {
PREV: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
NEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
NEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {

LINE: 655
PREV: Route::post('admin-users/store', [App\Http\Controllers\UserController::class, 'storeAdminUsers'])->name('admin.users.store');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
TEXT: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
NEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
NEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');

LINE: 657
PREV: Route::middleware(['permission:admins,admin.users.delete'])->group(function () {
PREV: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
NEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
NEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');
NEXT: });
NEXT: 

LINE: 658
PREV: Route::get('admin-users/delete/{id}', [App\Http\Controllers\UserController::class, 'deleteAdminUsers'])->name('admin.users.delete');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
TEXT: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
NEXT: });
NEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
NEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:ondemand-categories,ondemand.categories'])->group(function () {

LINE: 660
PREV: Route::middleware(['permission:admins,admin.users.edit'])->group(function () {
PREV: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
PREV: });
TEXT: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
NEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:ondemand-categories,ondemand.categories'])->group(function () {
NEXT: Route::get('/ondemand-categories', [App\Http\Controllers\OnDemandServiceController::class, 'Category'])->name('ondemandcategory');
NEXT: });

LINE: 661
PREV: Route::get('admin-users/edit/{id}', [App\Http\Controllers\UserController::class, 'editAdminUsers'])->name('admin.users.edit');
PREV: });
PREV: Route::middleware(['permission:admins,admin.users.update'])->group(function () {
TEXT: Route::post('admin-users/update/{id}', [App\Http\Controllers\UserController::class, 'updateAdminUsers'])->name('admin.users.update');
NEXT: });
NEXT: 
NEXT: Route::middleware(['permission:ondemand-categories,ondemand.categories'])->group(function () {
NEXT: Route::get('/ondemand-categories', [App\Http\Controllers\OnDemandServiceController::class, 'Category'])->name('ondemandcategory');
NEXT: });
NEXT: Route::middleware(['permission:ondemand-categories,ondemand.categories.create'])->group(function () {

LINE: 750
PREV: Route::get('/payoutRequests/providers/{id?}', [App\Http\Controllers\PayoutRequestController::class, 'provider'])->name('payoutRequests.providers');
PREV: });
PREV: 
TEXT: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');
NEXT: Route::post('pay-to-user', [App\Http\Controllers\UserController::class,'payToUser'])->name('pay.user');
NEXT: Route::post('check-payout-status', [App\Http\Controllers\UserController::class,'checkPayoutStatus'])->name('check.payout.status');
NEXT: 
NEXT: Route::middleware(['permission:subscription-plans,subscription-plans'])->group(function () {
NEXT: Route::get('/subscription-plans', [App\Http\Controllers\SubscriptionPlanController::class, 'index'])->name('subscription-plans.index');
NEXT: Route::get('/current-subscriber/{id}', [App\Http\Controllers\SubscriptionPlanController::class, 'currentSubscriberList'])->name('current-subscriber.list');

LINE: 751
PREV: });
PREV: 
PREV: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');
TEXT: Route::post('pay-to-user', [App\Http\Controllers\UserController::class,'payToUser'])->name('pay.user');
NEXT: Route::post('check-payout-status', [App\Http\Controllers\UserController::class,'checkPayoutStatus'])->name('check.payout.status');
NEXT: 
NEXT: Route::middleware(['permission:subscription-plans,subscription-plans'])->group(function () {
NEXT: Route::get('/subscription-plans', [App\Http\Controllers\SubscriptionPlanController::class, 'index'])->name('subscription-plans.index');
NEXT: Route::get('/current-subscriber/{id}', [App\Http\Controllers\SubscriptionPlanController::class, 'currentSubscriberList'])->name('current-subscriber.list');
NEXT: });

LINE: 752
PREV: 
PREV: Route::post('store-firebase-service', [App\Http\Controllers\HomeController::class,'storeFirebaseService'])->name('store-firebase-service');
PREV: Route::post('pay-to-user', [App\Http\Controllers\UserController::class,'payToUser'])->name('pay.user');
TEXT: Route::post('check-payout-status', [App\Http\Controllers\UserController::class,'checkPayoutStatus'])->name('check.payout.status');
NEXT: 
NEXT: Route::middleware(['permission:subscription-plans,subscription-plans'])->group(function () {
NEXT: Route::get('/subscription-plans', [App\Http\Controllers\SubscriptionPlanController::class, 'index'])->name('subscription-plans.index');
NEXT: Route::get('/current-subscriber/{id}', [App\Http\Controllers\SubscriptionPlanController::class, 'currentSubscriberList'])->name('current-subscriber.list');
NEXT: });
NEXT: Route::middleware(['permission:subscription-plans,subscription-plans.'.((str_contains(Request::url(), 'save')) ? (explode("save", Request::url())[1] ? "edit" : "create") : Request::url())])->group(function () {

LINE: 799
PREV: });
PREV: 
PREV: 
TEXT: Route::post('/send-ad-notification', [App\Http\Controllers\AdvertisementsController::class, 'sendNotification'])->name('advertisement.sendnotification');
NEXT: 
NEXT: Route::middleware(['permission:zone,zone.list'])->group(function () {
NEXT: Route::get('zone', [App\Http\Controllers\ZoneController::class, 'index'])->name('zone');
NEXT: });
NEXT: Route::middleware(['permission:zone,zone.create'])->group(function () {
NEXT: Route::get('/zone/create', [App\Http\Controllers\ZoneController::class, 'create'])->name('zone.create');

LINE: 877
PREV: Route::any('add-to-cart', [App\Http\Controllers\ProductController::class, 'addToCart'])->name('add-to-cart');
PREV: Route::any('cart-remove/{index}', [App\Http\Controllers\ProductController::class, 'remove'])->name('cart.remove');
PREV: Route::any('cart-update', [App\Http\Controllers\ProductController::class, 'update'])->name('cart.update');
TEXT: Route::post('/clear-cart', function () {
NEXT: session()->forget('cart');
NEXT: return response()->json(['success' => true]);
NEXT: })->name('clear.cart');
NEXT: Route::get('/get-session-cart', function () {
NEXT: return response()->json(session('cart', []));
NEXT: });

LINE: 900
PREV: });
PREV: 
PREV: Route::middleware(['permission:supportHistory,supportHistory.list'])->group(function () {
TEXT: Route::get('/support', [App\Http\Controllers\SupportHistoryController::class, 'index'])->name('users.support');
NEXT: });
NEXT: Route::middleware(['permission:drivers,drivers.chat'])->group(function () {
NEXT: Route::get('/drivers/chat/{id}', [App\Http\Controllers\DriverController::class, 'driverChat'])->name('drivers.chat');
NEXT: });
NEXT: Route::post('send-notification', [App\Http\Controllers\NotificationController::class, 'sendNotification'])->name('send-notification');
NEXT: Route::middleware(['permission:vendors,vendors.chat'])->group(function () {

LINE: 905
PREV: Route::middleware(['permission:drivers,drivers.chat'])->group(function () {
PREV: Route::get('/drivers/chat/{id}', [App\Http\Controllers\DriverController::class, 'driverChat'])->name('drivers.chat');
PREV: });
TEXT: Route::post('send-notification', [App\Http\Controllers\NotificationController::class, 'sendNotification'])->name('send-notification');
NEXT: Route::middleware(['permission:vendors,vendors.chat'])->group(function () {
NEXT: Route::get('/vendors/chat/{id}', [App\Http\Controllers\VendorController::class, 'vendorChat'])->name('vendors.chat');
NEXT: });
NEXT: Route::middleware(['permission:users,users.chat'])->group(function () {
NEXT: Route::get('/users/chat/{id}', [App\Http\Controllers\UserController::class, 'userChat'])->name('users.chat');
NEXT: });

LINE: 909
PREV: Route::middleware(['permission:vendors,vendors.chat'])->group(function () {
PREV: Route::get('/vendors/chat/{id}', [App\Http\Controllers\VendorController::class, 'vendorChat'])->name('vendors.chat');
PREV: });
TEXT: Route::middleware(['permission:users,users.chat'])->group(function () {
NEXT: Route::get('/users/chat/{id}', [App\Http\Controllers\UserController::class, 'userChat'])->name('users.chat');
NEXT: });
NEXT: Route::middleware(['permission:providers,providers.chat'])->group(function () {
NEXT: Route::get('/provider/chat/{id}', [App\Http\Controllers\ProvidersController::class, 'providerChat'])->name('providers.chat');
NEXT: });
NEXT: Route::middleware(['permission:ondemand-workers,ondemand.workers.chat'])->group(function () {

LINE: 910
PREV: Route::get('/vendors/chat/{id}', [App\Http\Controllers\VendorController::class, 'vendorChat'])->name('vendors.chat');
PREV: });
PREV: Route::middleware(['permission:users,users.chat'])->group(function () {
TEXT: Route::get('/users/chat/{id}', [App\Http\Controllers\UserController::class, 'userChat'])->name('users.chat');
NEXT: });
NEXT: Route::middleware(['permission:providers,providers.chat'])->group(function () {
NEXT: Route::get('/provider/chat/{id}', [App\Http\Controllers\ProvidersController::class, 'providerChat'])->name('providers.chat');
NEXT: });
NEXT: Route::middleware(['permission:ondemand-workers,ondemand.workers.chat'])->group(function () {
NEXT: Route::get('/worker/chat/{id}', [App\Http\Controllers\OnDemandServiceController::class, 'workerChat'])->name('ondemand.workers.chat');

## Keputusan Sementara

- Belum patch.
- Audit ini hanya mencari route dan controller delete-user Laravel.
- Fokus utama: apakah Store/Website punya POST /api/delete-user dan apakah controller-nya menghapus MySQL users/vendor_users.