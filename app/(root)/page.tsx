import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
	searchParams
}: {
	searchParams: Promise<{ query: string }>;
}) {
	const query = (await searchParams).query;

	const posts = await client.fetch(STARTUPS_QUERY);

	return (
		<>
			<section className="w-full bg-primary min-h-[530px] flex justify-center items-center flex-col py-10 px-6 pattern">
				<h1 className="heading">
					Pitch Your Startup, <br /> Connect With Entrepreneurs
				</h1>

				<p className="font-medium text-[20px] text-white max-w-2xl text-center break-words !max-w-3xl">
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
				</p>

				<SearchForm query={query} />
			</section>

			<section className="px-6 py-10 m-w-7xl mx-auto">
				<p className="text-30 text-semibold">
					{query ? `Search results for "${query}"` : "All Startups"}
				</p>

				<ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType, index: number) => (
							<StartupCard key={post._id} post={post} />
						))
					) : (
						<p className="text-black-100 text-sm font-normal">
							No Startups Found
						</p>
					)}
				</ul>
			</section>
		</>
	);
}
